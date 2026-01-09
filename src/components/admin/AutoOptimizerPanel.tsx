import { useAutoOptimizer } from '@/hooks/useAutoOptimizer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Play, Pause, Trophy, RefreshCw, CheckCircle, Clock, Zap } from 'lucide-react';
import { TESTABLE_ELEMENTS, TEST_REQUIREMENTS } from '@/lib/autoOptimizerConfig';

const AutoOptimizerPanel = () => {
  const {
    optimizedElements,
    testQueue,
    currentTest,
    isLoading,
    userVariant,
    startNextTest,
    pauseCurrentTest,
    resumeTest,
    declareWinner,
    refresh
  } = useAutoOptimizer();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'testing':
        return <Badge className="bg-blue-500">🔬 Läuft</Badge>;
      case 'paused':
        return <Badge variant="secondary">⏸️ Pausiert</Badge>;
      case 'completed':
        return <Badge className="bg-green-500">✅ Fertig</Badge>;
      default:
        return <Badge variant="outline">⏳ Wartet</Badge>;
    }
  };

  const getElementDescription = (type: string, id: string) => {
    const element = TESTABLE_ELEMENTS.find(e => e.elementType === type && e.elementId === id);
    return element?.description || `${type} - ${id}`;
  };

  const runningTest = testQueue.find(t => t.status === 'testing');
  const waitingTests = testQueue.filter(t => t.status === 'waiting').length;
  const completedTests = testQueue.filter(t => t.status === 'completed').length;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <RefreshCw className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">{runningTest ? 1 : 0}</p>
                <p className="text-sm text-muted-foreground">Laufender Test</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">{waitingTests}</p>
                <p className="text-sm text-muted-foreground">In Warteschlange</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-2xl font-bold">{completedTests}</p>
                <p className="text-sm text-muted-foreground">Abgeschlossen</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <div className="text-sm">
                <p className="font-semibold">Traffic-Split</p>
                <p className="text-muted-foreground">
                  {TEST_REQUIREMENTS.trafficSplitA}% A / {TEST_REQUIREMENTS.trafficSplitB}% B
                </p>
                <Badge variant="outline" className="mt-1">
                  Du siehst: Variante {userVariant}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Test */}
      {currentTest ? (
        <Card className="border-blue-500 border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                🔬 Aktueller Test: {getElementDescription(currentTest.elementType, currentTest.elementId)}
              </CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={pauseCurrentTest}>
                  <Pause className="h-4 w-4 mr-1" />
                  Pausieren
                </Button>
                <Button variant="outline" size="sm" onClick={refresh}>
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Variant A */}
              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-lg">SEITE A (75%)</span>
                  <Badge className="bg-green-500">Optimiert</Badge>
                </div>
                <p className="text-xl font-mono mb-2">{currentTest.variantA}</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Views:</span>
                    <span className="ml-2 font-bold">{currentTest.viewsA}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">CR:</span>
                    <span className="ml-2 font-bold">{currentTest.conversionRateA.toFixed(2)}%</span>
                  </div>
                </div>
              </div>

              {/* Variant B */}
              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-lg">SEITE B (25%)</span>
                  <Badge className="bg-blue-500">Test</Badge>
                </div>
                <p className="text-xl font-mono mb-2">{currentTest.variantB}</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Views:</span>
                    <span className="ml-2 font-bold">{currentTest.viewsB}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">CR:</span>
                    <span className="ml-2 font-bold">{currentTest.conversionRateB.toFixed(2)}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Fortschritt zum Minimum ({TEST_REQUIREMENTS.minViews} Views)</span>
                <span>{currentTest.progress.toFixed(0)}%</span>
              </div>
              <Progress value={currentTest.progress} className="h-3" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Konfidenz: {currentTest.confidence.toFixed(0)}%</span>
                <span>Benötigt: {TEST_REQUIREMENTS.minConfidence}%</span>
              </div>
            </div>

            {/* Winner Declaration */}
            {currentTest.progress >= 100 && currentTest.confidence >= TEST_REQUIREMENTS.minConfidence && (
              <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200">
                <p className="font-semibold mb-2">🏆 Test bereit zur Auswertung!</p>
                <div className="flex gap-2">
                  <Button onClick={() => declareWinner('A')} variant="outline" className="flex-1">
                    <Trophy className="h-4 w-4 mr-1" />
                    A gewinnt ({currentTest.variantA})
                  </Button>
                  <Button onClick={() => declareWinner('B')} variant="outline" className="flex-1">
                    <Trophy className="h-4 w-4 mr-1" />
                    B gewinnt ({currentTest.variantB})
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="py-8 text-center">
            <p className="text-muted-foreground mb-4">Kein Test läuft aktuell</p>
            <Button onClick={startNextTest} disabled={waitingTests === 0}>
              <Play className="h-4 w-4 mr-2" />
              Nächsten Test starten
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Test Queue */}
      <Card>
        <CardHeader>
          <CardTitle>📋 Test-Warteschlange</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {testQueue.map((test, index) => {
              const testedCount = test.tested_variants.length;
              const totalCount = test.variants_to_test.length;
              const progressPercent = (testedCount / totalCount) * 100;

              return (
                <div key={test.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground font-mono">{index + 1}.</span>
                    <div>
                      <p className="font-medium">{getElementDescription(test.element_type, test.element_id)}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Progress value={progressPercent} className="w-20 h-2" />
                        <span>{testedCount}/{totalCount} getestet</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(test.status)}
                    {test.status === 'paused' && (
                      <Button size="sm" variant="outline" onClick={() => resumeTest(test.id)}>
                        <Play className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Optimized Elements */}
      <Card>
        <CardHeader>
          <CardTitle>🏆 Optimierte Elemente (Gewinner)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {optimizedElements.map((element) => {
              const queueItem = testQueue.find(
                t => t.element_type === element.element_type && t.element_id === element.element_id
              );
              const testedCount = queueItem?.tested_variants.length || 0;
              const totalCount = queueItem?.variants_to_test.length || 5;

              return (
                <div key={`${element.element_type}-${element.element_id}`} className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200">
                  <div>
                    <p className="font-medium">{getElementDescription(element.element_type, element.element_id)}</p>
                    <p className="text-sm text-muted-foreground">
                      Gewinner: <span className="font-mono text-green-600">{element.winning_value}</span>
                    </p>
                  </div>
                  <Badge variant="outline" className="text-green-600">
                    {testedCount}/{totalCount} getestet
                  </Badge>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AutoOptimizerPanel;
