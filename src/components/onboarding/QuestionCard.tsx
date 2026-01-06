import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Question } from '@/data/questionnaireConfig';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Upload, X, Check } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  value: unknown;
  onChange: (value: unknown) => void;
  onFileUpload?: (file: File) => Promise<string | null>;
}

export function QuestionCard({ question, value, onChange, onFileUpload }: QuestionCardProps) {
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !onFileUpload) return;

    setIsUploading(true);
    const url = await onFileUpload(file);
    setIsUploading(false);

    if (url) {
      setUploadedFileName(file.name);
      onChange(url);
    }
  }, [onFileUpload, onChange]);

  const renderInput = () => {
    switch (question.type) {
      case 'text':
        return (
          <Input
            type="text"
            value={(value as string) || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={question.placeholder}
            className="text-lg py-6"
          />
        );

      case 'textarea':
        return (
          <Textarea
            value={(value as string) || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder={question.placeholder}
            className="min-h-[120px] text-lg"
          />
        );

      case 'select':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {question.options?.map((option) => (
              <motion.button
                key={option.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onChange(option.value)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  value === option.value
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    value === option.value ? 'border-primary bg-primary' : 'border-muted-foreground'
                  }`}>
                    {value === option.value && <Check className="w-3 h-3 text-primary-foreground" />}
                  </div>
                  <span className="font-medium">{option.label}</span>
                </div>
              </motion.button>
            ))}
          </div>
        );

      case 'multiselect':
        const selectedValues = (value as string[]) || [];
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {question.options?.map((option) => {
              const isSelected = selectedValues.includes(option.value);
              return (
                <motion.button
                  key={option.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (isSelected) {
                      onChange(selectedValues.filter(v => v !== option.value));
                    } else {
                      onChange([...selectedValues, option.value]);
                    }
                  }}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    isSelected
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Checkbox checked={isSelected} />
                    <span className="font-medium">{option.label}</span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        );

      case 'slider':
        const sliderValue = (value as number) || question.min || 0;
        return (
          <div className="space-y-4">
            <Slider
              value={[sliderValue]}
              onValueChange={(vals) => onChange(vals[0])}
              min={question.min}
              max={question.max}
              step={question.step}
              className="py-4"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{question.min}</span>
              <span className="text-2xl font-bold text-primary">{sliderValue}</span>
              <span>{question.max}</span>
            </div>
          </div>
        );

      case 'file':
        return (
          <div className="space-y-4">
            <label className={`flex flex-col items-center justify-center w-full h-40 border-2 border-dashed 
                              rounded-lg cursor-pointer transition-all
                              ${uploadedFileName ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50 hover:bg-muted/50'}`}>
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {isUploading ? (
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary" />
                ) : uploadedFileName ? (
                  <>
                    <Check className="w-10 h-10 text-primary mb-2" />
                    <p className="text-sm text-primary font-medium">{uploadedFileName}</p>
                    <p className="text-xs text-muted-foreground">Klicken zum Ändern</p>
                  </>
                ) : (
                  <>
                    <Upload className="w-10 h-10 text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-primary">Klicken</span> oder Datei hierher ziehen
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">PNG, JPG (max. 10MB)</p>
                  </>
                )}
              </div>
              <input 
                type="file" 
                className="hidden" 
                accept="image/*"
                onChange={handleFileChange}
              />
            </label>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <div>
        <Label className="text-lg font-medium">
          {question.question}
          {question.required && <span className="text-destructive ml-1">*</span>}
        </Label>
        {question.helpText && (
          <p className="text-sm text-muted-foreground mt-1">{question.helpText}</p>
        )}
      </div>
      {renderInput()}
    </motion.div>
  );
}
