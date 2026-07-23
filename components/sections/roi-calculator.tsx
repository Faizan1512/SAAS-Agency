'use client';

import { useState, useMemo } from 'react';
import { Calculator, TrendingUp, Clock, DollarSign, Zap } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

export function ROICalculator() {
  const [employees, setEmployees] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(50);

  const results = useMemo(() => {
    const weeklyCost = employees * hoursPerWeek * hourlyRate;
    const annualCost = weeklyCost * 52;
    const aiAnnualCost = annualCost * 0.25;
    const annualSavings = annualCost - aiAnnualCost;
    const hoursSavedPerWeek = employees * hoursPerWeek * 0.8;
    const roi = Math.round((annualSavings / aiAnnualCost) * 100);
    const paybackWeeks = Math.max(1, Math.round(15000 / (weeklyCost * 0.75)));

    return { weeklyCost, annualCost, aiAnnualCost, annualSavings, hoursSavedPerWeek, roi, paybackWeeks };
  }, [employees, hoursPerWeek, hourlyRate]);

  const fmt = (n: number) =>
    n >= 1000 ? `$${(n / 1000).toFixed(0)}k` : `$${n.toFixed(0)}`;

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-chart-2/8 blur-[120px]" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground">
            <Calculator className="h-3.5 w-3.5 text-primary" />
            Interactive tool
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Calculate your AI automation ROI
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            See how much time and money AI automation can save your team. Drag
            the sliders to match your situation.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur-sm">
          <div className="grid lg:grid-cols-5">
            {/* Inputs */}
            <div className="space-y-8 p-8 lg:col-span-3 lg:p-10">
              <div>
                <div className="flex items-center justify-between">
                  <Label icon={DollarSign} label="Team size" value={`${employees} employees`} />
                </div>
                <Slider
                  value={[employees]}
                  onValueChange={(v) => setEmployees(v[0])}
                  min={1}
                  max={50}
                  step={1}
                  className="mt-4"
                />
                <div className="mt-1.5 flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>50</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <Label icon={Clock} label="Manual hours per week" value={`${hoursPerWeek} hrs/employee`} />
                </div>
                <Slider
                  value={[hoursPerWeek]}
                  onValueChange={(v) => setHoursPerWeek(v[0])}
                  min={1}
                  max={40}
                  step={1}
                  className="mt-4"
                />
                <div className="mt-1.5 flex justify-between text-xs text-muted-foreground">
                  <span>1 hr</span>
                  <span>40 hrs</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <Label icon={DollarSign} label="Average hourly rate" value={`$${hourlyRate}/hr`} />
                </div>
                <Slider
                  value={[hourlyRate]}
                  onValueChange={(v) => setHourlyRate(v[0])}
                  min={15}
                  max={200}
                  step={5}
                  className="mt-4"
                />
                <div className="mt-1.5 flex justify-between text-xs text-muted-foreground">
                  <span>$15</span>
                  <span>$200</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="relative border-t border-border bg-background/40 p-8 lg:col-span-2 lg:border-l lg:border-t-0 lg:p-10">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/10 blur-[60px]" />
              <div className="relative space-y-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Annual savings
                  </p>
                  <p className="mt-1 font-display text-4xl font-bold text-primary">
                    {fmt(results.annualSavings)}
                  </p>
                </div>

                <div className="space-y-4">
                  <ResultRow
                    icon={TrendingUp}
                    label="ROI"
                    value={`${results.roi}%`}
                    accent
                  />
                  <ResultRow
                    icon={Clock}
                    label="Hours saved / week"
                    value={`${results.hoursSavedPerWeek.toFixed(0)} hrs`}
                  />
                  <ResultRow
                    icon={Zap}
                    label="Payback period"
                    value={`${results.paybackWeeks} weeks`}
                  />
                </div>

                <div className="rounded-xl border border-border bg-card/60 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Current cost</span>
                    <span className="font-medium line-through decoration-destructive/50">
                      {fmt(results.annualCost)}/yr
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">With AI</span>
                    <span className="font-medium text-primary">
                      {fmt(results.aiAnnualCost)}/yr
                    </span>
                  </div>
                </div>

                <Button asChild className="w-full" size="lg">
                  <a href="#contact">Claim your savings</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-4 w-4 text-muted-foreground" />
      <span className="text-sm font-medium">{label}</span>
      <span className="ml-auto text-sm font-semibold text-primary">{value}</span>
    </div>
  );
}

function ResultRow({ icon: Icon, label, value, accent }: { icon: any; label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${accent ? 'bg-primary/15 ring-1 ring-primary/30' : 'bg-secondary'}`}>
        <Icon className={`h-4 w-4 ${accent ? 'text-primary' : 'text-muted-foreground'}`} />
      </div>
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="ml-auto font-display text-lg font-semibold">{value}</span>
    </div>
  );
}
