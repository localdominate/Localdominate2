import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '@/data/questionnaireConfig';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Upload, Check, Image, Sparkles } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  value: unknown;
  onChange: (value: unknown) => void;
  onFileUpload?: (file: File) => Promise<string | null>;
}

export function QuestionCard({ question, value, onChange, onFileUpload }: QuestionCardProps) {
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

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

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const file = e.dataTransfer.files?.[0];
    if (!file || !onFileUpload) return;

    setIsUploading(true);
    const url = await onFileUpload(file);
    setIsUploading(false);

    if (url) {
      setUploadedFileName(file.name);
      onChange(url);
    }
  }, [onFileUpload, onChange]);

  // Character counter for textarea with maxLength
  const renderCharacterCount = () => {
    if (question.type !== 'textarea' || !question.maxLength) return null;
    const currentLength = ((value as string) || '').length;
    const isNearLimit = currentLength > question.maxLength * 0.8;
    const isOverLimit = currentLength > question.maxLength;
    
    return (
      <div className={`text-sm mt-2 text-right font-medium ${
        isOverLimit ? 'text-destructive' : isNearLimit ? 'text-amber-500' : 'text-muted-foreground'
      }`}>
        {currentLength} / {question.maxLength} Zeichen
        {isOverLimit && <span className="ml-2">⚠️ Zu lang!</span>}
      </div>
    );
  };

  const renderInput = () => {
    switch (question.type) {
      case 'text':
        return (
          <div className="relative group">
            <Input
              type="text"
              value={(value as string) || ''}
              onChange={(e) => onChange(e.target.value)}
              placeholder={question.placeholder}
              className="text-lg py-7 px-5 rounded-xl border-2 border-border bg-background
                         focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all
                         placeholder:text-muted-foreground/50"
            />
            {value && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <Check className="w-5 h-5 text-primary" />
              </motion.div>
            )}
          </div>
        );

      case 'time':
        return (
          <div className="relative group">
            <Input
              type="text"
              value={(value as string) || ''}
              onChange={(e) => onChange(e.target.value)}
              placeholder={question.placeholder || '09:00 - 18:00'}
              className="text-lg py-7 px-5 rounded-xl border-2 border-border bg-background
                         focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all
                         placeholder:text-muted-foreground/50 font-mono"
            />
            {value && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <Check className="w-5 h-5 text-primary" />
              </motion.div>
            )}
          </div>
        );

      case 'textarea':
        return (
          <div>
            <Textarea
              value={(value as string) || ''}
              onChange={(e) => onChange(e.target.value)}
              placeholder={question.placeholder}
              className={`min-h-[140px] text-lg p-5 rounded-xl border-2 bg-background
                         focus:ring-4 focus:ring-primary/10 transition-all resize-none
                         placeholder:text-muted-foreground/50
                         ${question.maxLength && ((value as string) || '').length > question.maxLength 
                           ? 'border-destructive focus:border-destructive' 
                           : 'border-border focus:border-primary'}`}
            />
            {renderCharacterCount()}
          </div>
        );

      case 'toggle':
        const isToggled = value === true || value === 'yes';
        return (
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange('yes')}
              className={`flex-1 p-5 rounded-xl border-2 text-center transition-all duration-200
                ${isToggled
                  ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
                  : 'border-border hover:border-primary/50 hover:bg-muted/30'
                }`}
            >
              <span className={`font-medium text-lg ${isToggled ? 'text-primary' : 'text-foreground'}`}>
                Ja
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange('no')}
              className={`flex-1 p-5 rounded-xl border-2 text-center transition-all duration-200
                ${value === 'no'
                  ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
                  : 'border-border hover:border-primary/50 hover:bg-muted/30'
                }`}
            >
              <span className={`font-medium text-lg ${value === 'no' ? 'text-primary' : 'text-foreground'}`}>
                Nein
              </span>
            </motion.button>
          </div>
        );

      case 'select':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {question.options?.map((option, idx) => (
              <motion.button
                key={option.value}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onChange(option.value)}
                className={`relative p-5 rounded-xl border-2 text-left transition-all duration-200 overflow-hidden
                  ${value === option.value
                    ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
                    : 'border-border hover:border-primary/50 hover:bg-muted/30'
                  }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all
                    ${value === option.value 
                      ? 'border-primary bg-primary scale-110' 
                      : 'border-muted-foreground/30'
                    }`}
                  >
                    <AnimatePresence>
                      {value === option.value && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Check className="w-3.5 h-3.5 text-primary-foreground" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <span className={`font-medium text-lg ${value === option.value ? 'text-primary' : 'text-foreground'}`}>
                    {option.label}
                  </span>
                </div>
                
                {/* Selected indicator */}
                {value === option.value && (
                  <motion.div
                    layoutId="selected-option"
                    className="absolute inset-0 border-2 border-primary rounded-xl"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        );

      case 'multiselect':
        const selectedValues = (value as string[]) || [];
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {question.options?.map((option, idx) => {
              const isSelected = selectedValues.includes(option.value);
              return (
                <motion.button
                  key={option.value}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (isSelected) {
                      onChange(selectedValues.filter(v => v !== option.value));
                    } else {
                      onChange([...selectedValues, option.value]);
                    }
                  }}
                  className={`p-5 rounded-xl border-2 text-left transition-all duration-200
                    ${isSelected
                      ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
                      : 'border-border hover:border-primary/50 hover:bg-muted/30'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all
                      ${isSelected 
                        ? 'border-primary bg-primary' 
                        : 'border-muted-foreground/30'
                      }`}
                    >
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                          >
                            <Check className="w-3.5 h-3.5 text-primary-foreground" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <span className={`font-medium text-lg ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                      {option.label}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        );

      case 'slider':
        const sliderValue = (value as number) || question.min || 0;
        return (
          <div className="space-y-6 px-2">
            <Slider
              value={[sliderValue]}
              onValueChange={(vals) => onChange(vals[0])}
              min={question.min}
              max={question.max}
              step={question.step}
              className="py-6"
            />
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground font-medium">{question.min}</span>
              <motion.div
                key={sliderValue}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-3xl font-bold text-primary">{sliderValue}</span>
              </motion.div>
              <span className="text-sm text-muted-foreground font-medium">{question.max}</span>
            </div>
          </div>
        );

      case 'file':
        return (
          <div className="space-y-4">
            <label 
              className={`flex flex-col items-center justify-center w-full h-48 border-2 border-dashed 
                          rounded-2xl cursor-pointer transition-all duration-300
                          ${dragOver 
                            ? 'border-primary bg-primary/10 scale-[1.02]' 
                            : uploadedFileName 
                              ? 'border-primary bg-primary/5' 
                              : 'border-border hover:border-primary/50 hover:bg-muted/30'
                          }`}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center justify-center py-6 px-4">
                {isUploading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-12 h-12 border-3 border-primary border-t-transparent rounded-full"
                  />
                ) : uploadedFileName ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Image className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-base text-primary font-semibold">{uploadedFileName}</p>
                    <p className="text-sm text-muted-foreground mt-1">Klicken zum Ändern</p>
                  </motion.div>
                ) : (
                  <>
                    <motion.div
                      animate={dragOver ? { scale: 1.1, y: -5 } : { scale: 1, y: 0 }}
                      className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4"
                    >
                      <Upload className="w-8 h-8 text-muted-foreground" />
                    </motion.div>
                    <p className="text-base text-foreground mb-1">
                      <span className="font-semibold text-primary">Klicken</span> oder hierher ziehen
                    </p>
                    <p className="text-sm text-muted-foreground">PNG, JPG (max. 10MB)</p>
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="space-y-2">
        <Label className="text-xl font-semibold text-foreground flex items-center gap-2 flex-wrap">
          {question.question}
          {question.required && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
              Pflicht
            </span>
          )}
          {question.gmbField && !question.gmbField.startsWith('Intern') && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 font-medium">
              GMB: {question.gmbField}
            </span>
          )}
        </Label>
        {question.helpText && (
          <p className="text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-lg inline-block">
            💡 {question.helpText}
          </p>
        )}
      </div>
      {renderInput()}
    </motion.div>
  );
}
