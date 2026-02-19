"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, AlertTriangle } from "lucide-react";
import {
  InputField,
  TextAreaField,
  CheckboxField,
  RadioGroupField,
  CheckboxGroupField,
} from "@/components/ui/FormField";

type FormData = {
  name: string;
  phone: string;
  email: string;
  company: string;
  country: string;
  kvk: string;
  noKvk: boolean;
  registered: string;
  proteins: string[];
  otherProducts: string[];
  otherProductText: string;
  needAdvice: boolean;
  purpose: string;
  budget: string;
  timeline: string;
  route: string;
  proteinVolume: string;
  otherVolume: string;
  labelDesign: string;
  labelHelp: string;
  howFound: string;
  howFoundOther: string;
  notes: string;
};

const TOTAL_STEPS = 4;

export default function OfferteForm() {
  const t = useTranslations("offerte");

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    company: "",
    country: "",
    kvk: "",
    noKvk: false,
    registered: "",
    proteins: [],
    otherProducts: [],
    otherProductText: "",
    needAdvice: false,
    purpose: "",
    budget: "",
    timeline: "",
    route: "",
    proteinVolume: "",
    otherVolume: "",
    labelDesign: "",
    labelHelp: "",
    howFound: "",
    howFoundOther: "",
    notes: "",
  });

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const stepLabels = [t("step1"), t("step2"), t("step3"), t("step4")];

  const hasProtein =
    formData.proteins.includes("wheyProtein") ||
    formData.proteins.includes("clearWhey") ||
    formData.proteins.includes("veganProtein");

  const goNext = () => setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 1));

  return (
    <div>
      {/* Progress indicator */}
      <div className="mb-10">
        <div className="flex items-center justify-between">
          {stepLabels.map((label, i) => {
            const stepNum = i + 1;
            const isCompleted = stepNum < currentStep;
            const isActive = stepNum === currentStep;
            const isFuture = stepNum > currentStep;

            return (
              <div key={stepNum} className="flex items-center flex-1 last:flex-none">
                {/* Circle + label */}
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-body font-semibold transition-all ${
                      isCompleted
                        ? "bg-accent text-white"
                        : isActive
                          ? "border-2 border-accent text-accent bg-white"
                          : "border-2 border-border text-text-muted bg-white"
                    }`}
                  >
                    {isCompleted ? <Check className="h-5 w-5" strokeWidth={2.5} /> : stepNum}
                  </div>
                  <span
                    className={`mt-2 text-xs font-body font-medium text-center hidden sm:block ${
                      isActive ? "text-accent" : isFuture ? "text-text-muted" : "text-text-primary"
                    }`}
                  >
                    {label}
                  </span>
                </div>

                {/* Connector line */}
                {stepNum < TOTAL_STEPS && (
                  <div className="flex-1 mx-3 h-0.5 rounded-full mt-[-1.25rem] sm:mt-0 sm:mb-5">
                    <div
                      className={`h-full rounded-full transition-all ${
                        isCompleted ? "bg-accent" : "bg-border"
                      }`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Step content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          <div className="bg-surface-secondary rounded-2xl p-6 lg:p-8">
            {currentStep === 1 && (
              <Step1Contact formData={formData} updateField={updateField} t={t} />
            )}
            {currentStep === 2 && (
              <Step2Products formData={formData} updateField={updateField} t={t} />
            )}
            {currentStep === 3 && (
              <Step3Budget
                formData={formData}
                updateField={updateField}
                t={t}
                hasProtein={hasProtein}
              />
            )}
            {currentStep === 4 && (
              <Step4Marketing formData={formData} updateField={updateField} t={t} />
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-6 gap-4">
        {currentStep > 1 ? (
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-2 border border-border text-text-primary hover:bg-surface-secondary px-6 py-3 rounded-lg font-body font-medium text-sm transition-all w-full sm:w-auto justify-center cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("back")}
          </button>
        ) : (
          <div />
        )}

        {currentStep < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={goNext}
            className="inline-flex items-center gap-2 bg-accent text-text-on-accent hover:bg-accent-hover px-6 py-3 rounded-lg font-body font-medium text-sm transition-all w-full sm:w-auto justify-center cursor-pointer"
          >
            {t("next")}
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            className="inline-flex items-center gap-2 bg-accent text-text-on-accent hover:bg-accent-hover px-6 py-3 rounded-lg font-body font-medium text-sm transition-all w-full sm:w-auto justify-center cursor-pointer"
          >
            {t("send")}
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {currentStep === TOTAL_STEPS && (
        <p className="text-sm text-text-muted mt-4 text-center">{t("disclaimer")}</p>
      )}
    </div>
  );
}

/* ============================================================
   STEP 1 — Contact & Company
   ============================================================ */

type StepProps = {
  formData: FormData;
  updateField: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
  t: ReturnType<typeof useTranslations<"offerte">>;
};

function Step1Contact({ formData, updateField, t }: StepProps) {
  return (
    <div className="space-y-5">
      <h2 className="font-display font-black text-h3 text-text-primary uppercase">
        {t("contact.title")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label={t("contact.name")}
          required
          value={formData.name}
          onChange={(v) => updateField("name", v)}
        />
        <InputField
          label={t("contact.phone")}
          type="tel"
          value={formData.phone}
          onChange={(v) => updateField("phone", v)}
        />
      </div>

      <InputField
        label={t("contact.email")}
        type="email"
        required
        value={formData.email}
        onChange={(v) => updateField("email", v)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label={t("contact.company")}
          value={formData.company}
          onChange={(v) => updateField("company", v)}
        />
        <InputField
          label={t("contact.country")}
          value={formData.country}
          onChange={(v) => updateField("country", v)}
        />
      </div>

      <AnimatePresence>
        {!formData.noKvk && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <InputField
              label={t("contact.kvk")}
              value={formData.kvk}
              onChange={(v) => updateField("kvk", v)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <CheckboxField
        label={t("contact.kvkNone")}
        checked={formData.noKvk}
        onChange={(v) => {
          updateField("noKvk", v);
          if (v) updateField("kvk", "");
        }}
      />

      <RadioGroupField
        label={t("contact.registered")}
        value={formData.registered}
        onChange={(v) => updateField("registered", v)}
        options={[
          { value: "yes", label: t("contact.registeredYes") },
          { value: "no", label: t("contact.registeredNo") },
        ]}
        columns={2}
      />
    </div>
  );
}

/* ============================================================
   STEP 2 — What are you looking for
   ============================================================ */

function Step2Products({ formData, updateField, t }: StepProps) {
  return (
    <div className="space-y-6">
      <h2 className="font-display font-black text-h3 text-text-primary uppercase">
        {t("products.title")}
      </h2>

      {/* Proteins */}
      <CheckboxGroupField
        label={t("products.proteinsLabel")}
        values={formData.proteins}
        onChange={(v) => updateField("proteins", v)}
        options={[
          { value: "wheyProtein", label: t("products.wheyProtein") },
          { value: "clearWhey", label: t("products.clearWhey") },
          { value: "veganProtein", label: t("products.veganProtein") },
        ]}
        columns={3}
      />

      {/* Other products */}
      <CheckboxGroupField
        label={t("products.otherProductsLabel")}
        values={formData.otherProducts}
        onChange={(v) => updateField("otherProducts", v)}
        options={[
          { value: "creatine", label: t("products.creatine") },
          { value: "electrolytes", label: t("products.electrolytes") },
          { value: "preWorkout", label: t("products.preWorkout") },
          { value: "aminos", label: t("products.aminos") },
          { value: "collagen", label: t("products.collagen") },
          { value: "vitamins", label: t("products.vitamins") },
          { value: "omega3", label: t("products.omega3") },
          { value: "other", label: t("products.other") },
        ]}
        columns={3}
      />

      {/* Other product text */}
      <AnimatePresence>
        {formData.otherProducts.includes("other") && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <InputField
              label={t("products.other")}
              placeholder={t("products.otherPlaceholder")}
              value={formData.otherProductText}
              onChange={(v) => updateField("otherProductText", v)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <CheckboxField
        label={t("products.needAdvice")}
        checked={formData.needAdvice}
        onChange={(v) => updateField("needAdvice", v)}
      />

      <RadioGroupField
        label={t("products.purposeLabel")}
        value={formData.purpose}
        onChange={(v) => updateField("purpose", v)}
        options={[
          { value: "quote", label: t("products.purposeQuote") },
          { value: "samples", label: t("products.purposeSamples") },
          { value: "info", label: t("products.purposeInfo") },
        ]}
        columns={3}
      />
    </div>
  );
}

/* ============================================================
   STEP 3 — Budget & Planning
   ============================================================ */

type Step3Props = StepProps & { hasProtein: boolean };

function Step3Budget({ formData, updateField, t, hasProtein }: Step3Props) {
  return (
    <div className="space-y-6">
      <h2 className="font-display font-black text-h3 text-text-primary uppercase">
        {t("budget.title")}
      </h2>

      <RadioGroupField
        label={t("budget.budgetLabel")}
        value={formData.budget}
        onChange={(v) => updateField("budget", v)}
        options={[
          { value: "0-5000", label: t("budget.budget1") },
          { value: "5000-10000", label: t("budget.budget2") },
          { value: "10000+", label: t("budget.budget3") },
        ]}
        columns={3}
      />

      <RadioGroupField
        label={t("budget.timelineLabel")}
        value={formData.timeline}
        onChange={(v) => updateField("timeline", v)}
        options={[
          { value: "now", label: t("budget.timelineNow") },
          { value: "4w", label: t("budget.timeline4w") },
          { value: "1-3m", label: t("budget.timeline1to3m") },
          { value: "later", label: t("budget.timelineLater") },
        ]}
        columns={2}
      />

      <div>
        <RadioGroupField
          label={t("budget.routeLabel")}
          value={formData.route}
          onChange={(v) => updateField("route", v)}
          options={[
            { value: "whiteLabel", label: t("budget.routeWhiteLabel") },
            { value: "custom", label: t("budget.routeCustom") },
            { value: "unsure", label: t("budget.routeUnsure") },
          ]}
          columns={1}
        />
        <AnimatePresence>
          {formData.route === "custom" && (
            <motion.p
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-xs text-text-muted mt-2 overflow-hidden"
            >
              {t("budget.routeCustomNote")}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Conditional volume fields for custom formula */}
      <AnimatePresence>
        {formData.route === "custom" && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-4 overflow-hidden"
          >
            {hasProtein ? (
              <>
                <RadioGroupField
                  label={t("budget.volumeProteinLabel")}
                  value={formData.proteinVolume}
                  onChange={(v) => updateField("proteinVolume", v)}
                  options={[
                    { value: "under1000", label: t("budget.volumeProtein1") },
                    { value: "1000-2000", label: t("budget.volumeProtein2") },
                    { value: "2000+", label: t("budget.volumeProtein3") },
                  ]}
                  columns={3}
                />
                <AnimatePresence>
                  {formData.proteinVolume === "under1000" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <WarningBanner message={t("budget.volumeProteinWarning")} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <>
                <RadioGroupField
                  label={t("budget.volumeOtherLabel")}
                  value={formData.otherVolume}
                  onChange={(v) => updateField("otherVolume", v)}
                  options={[
                    { value: "under250", label: t("budget.volumeOther1") },
                    { value: "250-500", label: t("budget.volumeOther2") },
                    { value: "500+", label: t("budget.volumeOther3") },
                  ]}
                  columns={3}
                />
                <AnimatePresence>
                  {formData.otherVolume === "under250" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <WarningBanner message={t("budget.volumeOtherWarning")} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <RadioGroupField
          label={t("budget.labelDesignLabel")}
          value={formData.labelDesign}
          onChange={(v) => updateField("labelDesign", v)}
          options={[
            { value: "ready", label: t("budget.labelDesignReady") },
            { value: "notReady", label: t("budget.labelDesignNotReady") },
            { value: "none", label: t("budget.labelDesignNone") },
          ]}
          columns={1}
        />
      </div>

      <AnimatePresence>
        {formData.labelDesign === "none" && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <RadioGroupField
              label={t("budget.labelHelpLabel")}
              value={formData.labelHelp}
              onChange={(v) => updateField("labelHelp", v)}
              options={[
                { value: "specs", label: t("budget.labelHelpSpecs") },
                { value: "design", label: t("budget.labelHelpDesign") },
              ]}
              columns={1}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ============================================================
   STEP 4 — Marketing
   ============================================================ */

function Step4Marketing({ formData, updateField, t }: StepProps) {
  return (
    <div className="space-y-6">
      <h2 className="font-display font-black text-h3 text-text-primary uppercase">
        {t("marketing.title")}
      </h2>

      <RadioGroupField
        label={t("marketing.howFoundLabel")}
        value={formData.howFound}
        onChange={(v) => updateField("howFound", v)}
        options={[
          { value: "google", label: t("marketing.howFoundGoogle") },
          { value: "linkedin", label: t("marketing.howFoundLinkedin") },
          { value: "social", label: t("marketing.howFoundSocial") },
          { value: "referral", label: t("marketing.howFoundReferral") },
          { value: "customer", label: t("marketing.howFoundCustomer") },
          { value: "event", label: t("marketing.howFoundEvent") },
          { value: "other", label: t("marketing.howFoundOther") },
        ]}
        columns={2}
      />

      <AnimatePresence>
        {formData.howFound === "other" && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <InputField
              label={t("marketing.howFoundOther")}
              placeholder={t("marketing.howFoundOtherPlaceholder")}
              value={formData.howFoundOther}
              onChange={(v) => updateField("howFoundOther", v)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <TextAreaField
          label={t("marketing.notesLabel")}
          value={formData.notes}
          onChange={(v) => updateField("notes", v)}
          maxLength={300}
          placeholder={t("marketing.notesPlaceholder")}
          rows={4}
        />
        <p className="text-xs text-text-muted mt-1">{t("marketing.notesSubLabel")}</p>
      </div>
    </div>
  );
}

/* ============================================================
   Warning Banner
   ============================================================ */

function WarningBanner({ message }: { message: string }) {
  return (
    <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4">
      <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
      <p className="text-sm text-amber-800">{message}</p>
    </div>
  );
}
