Below is a developer-facing starter spec based on the screenshots and the live app shell at the provided URL.    
  
**CSS variables**  
  
```
:root {
  /* Backgrounds */
  
```
```
--bg-canvas: #021a14;

```
```
  
```
```
--bg-canvas-2: #031f1a;

```
```
  --bg-surface: rgba(255, 255, 255, 0.04);
  
```
```
--bg-surface-strong: rgba(255, 255, 255, 0.06);

```
```
  
```
```
--bg-elevated: rgba(8, 18, 16, 0.88);

```
```

  
```
```
/* Borders */

```
```
  
```
```
--border-subtle: rgba(255, 255, 255, 0.08);

```
```
  
```
```
--border-default: rgba(255, 255, 255, 0.12);

```
```
  
```
```
--border-strong: rgba(255, 255, 255, 0.18);

```
```

  /* Text */
  
```
```
--text-primary: #e8f0ec;

```
```
  --text-secondary: #a8b3af;
  
```
```
--text-muted: #6f7c77;

```
```
  
```
```
--text-inverse: #08110e;

```
```

  
```
```
/* Brand */

```
```
  
```
```
--brand-primary: #2fd6a3;

```
```
  
```
```
--brand-primary-2: #139a78;

```
```
  
```
```
--brand-glow: rgba(47, 214, 163, 0.22);

```
```
  
```
```
--brand-info: #8b8cff;

```
```

  
```
```
/* Semantic */

```
```
  
```
```
--danger: #ff4d4f;

```
```
  
```
```
--danger-soft: rgba(255, 77, 79, 0.14);

```
```
  --danger-bg-start: #3a0b0b;
  
```
```
--danger-bg-end: #1a0505;

```
```

  
```
```
--warning: #d6a85f;

```
```
  
```
```
--success: #2fd6a3;

```
```

  
```
```
/* Gradients */

```
```
  --gradient-page: linear-gradient(
    
```
```
180deg,

```
```
    
```
```
#021a14 0%,

```
```
    
```
```
#031f1a 45%,

```
```
    
```
```
#021610 100%

```
```
  );

  
```
```
--gradient-surface: linear-gradient(

```
```
    
```
```
90deg,

```
```
    rgba(27, 54, 46, 0.68) 0%,
    rgba(
```
```
7, 19, 16, 0.78) 100%

```
```
  );

  --gradient-hero-glow: radial-gradient(
    circle at top center,
    rgba(
```
```
47, 214, 163, 0.12),

```
```
    transparent 
```
```
42%

```
```
  );

  
```
```
--gradient-danger: linear-gradient(

```
```
    180deg,
    rgba(
```
```
58, 11, 11, 0.92) 0%,

```
```
    rgba(26, 5, 5, 0.95) 100%
  );

  
```
```
/* Radius */

```
```
  
```
```
--radius-sm: 12px;

```
```
  
```
```
--radius-md: 16px;

```
```
  --radius-lg: 20px;
  
```
```
--radius-xl: 24px;

```
```
  
```
```
--radius-pill: 999px;

```
```

  
```
```
/* Shadows */

```
```
  --shadow-soft: 0 8px 24px rgba(0, 0, 0, 0.24);
  
```
```
--shadow-glow: 0 0 0 1px var(--border-subtle), 0 0 28px var(--brand-glow);

```
```

  
```
```
/* Spacing */

```
```
  
```
```
--space-1: 4px;

```
```
  --space-2: 8px;
  
```
```
--space-3: 12px;

```
```
  
```
```
--space-4: 16px;

```
```
  
```
```
--space-5: 20px;

```
```
  --space-6: 24px;
  
```
```
--space-8: 32px;

```
```
  
```
```
--space-10: 40px;

```
```

  /* Typography */
  
```
```
--font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,

```
```
    
```
```
"Segoe UI", sans-serif;

```
```

  
```
```
--text-xs: 12px;

```
```
  --text-sm: 14px;
  
```
```
--text-base: 16px;

```
```
  --text-lg: 20px;
  --text-xl: 28px;
  --text-2xl: 34px;

  --tracking-label: 0.18em;

  
```
```
/* Motion */

```
```
  --ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1);
  --dur-fast: 150ms;
  
```
```
--dur-med: 220ms;

```
```
}
```
```


```
  
**Tailwind theme extension**  
  
```
// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  
```
```
content: ["./src/**/*.{ts,tsx}"],

```
```
  theme: {
    
```
```
extend: {

```
```
      
```
```
fontFamily: {

```
```
        
```
```
sans: [

```
```
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          
```
```
"BlinkMacSystemFont",

```
```
          
```
```
"Segoe UI",

```
```
          
```
```
"sans-serif",

```
```
        ],
      },
      
```
```
colors: {

```
```
        
```
```
entheogen: {

```
```
          canvas: "var(--bg-canvas)",
          
```
```
canvas2: "var(--bg-canvas-2)",

```
```
          surface: "var(--bg-surface)",
          
```
```
surfaceStrong: "var(--bg-surface-strong)",

```
```
          
```
```
elevated: "var(--bg-elevated)",

```
```

          border: {
            subtle: "var(--border-subtle)",
            
```
```
DEFAULT: "var(--border-default)",

```
```
            
```
```
strong: "var(--border-strong)",

```
```
          },

          
```
```
text: {

```
```
            primary: "var(--text-primary)",
            secondary: "var(--text-secondary)",
            muted: "var(--text-muted)",
            inverse: "var(--text-inverse)",
          },

          brand: {
            primary: "var(--brand-primary)",
            secondary: "var(--brand-primary-2)",
            glow: "var(--brand-glow)",
            info: "var(--brand-info)",
          },

          
```
```
danger: {

```
```
            DEFAULT: "var(--danger)",
            
```
```
soft: "var(--danger-soft)",

```
```
            start: "var(--danger-bg-start)",
            
```
```
end: "var(--danger-bg-end)",

```
```
          },

          
```
```
warning: "var(--warning)",

```
```
          success: "var(--success)",
        },
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        
```
```
md: "var(--radius-md)",

```
```
        
```
```
lg: "var(--radius-lg)",

```
```
        
```
```
xl: "var(--radius-xl)",

```
```
        
```
```
pill: "var(--radius-pill)",

```
```
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        glow: "var(--shadow-glow)",
      },
      backgroundImage: {
        
```
```
"entheogen-page": "var(--gradient-page)",

```
```
        
```
```
"entheogen-surface": "var(--gradient-surface)",

```
```
        
```
```
"entheogen-hero-glow": "var(--gradient-hero-glow)",

```
```
        "entheogen-danger": "var(--gradient-danger)",
      },
      
```
```
letterSpacing: {

```
```
        
```
```
label: "var(--tracking-label)",

```
```
      },
      transitionTimingFunction: {
        standard: "var(--ease-standard)",
      },
      transitionDuration: {
        
```
```
fast: "var(--dur-fast)",

```
```
        
```
```
med: "var(--dur-med)",

```
```
      },
      
```
```
maxWidth: {

```
```
        app: "480px",
      },
    },
  },
  
```
```
plugins: [],

```
} satisfies Config;  
  
**Base app shell classes**  
  
```
@layer base {
  
```
```
html {

```
```
    
```
```
font-family: var(--font-sans);

```
```
    
```
```
background: var(--gradient-page);

```
```
    color: var(--text-primary);
  }

  
```
```
body {

```
```
    
```
```
min-height: 100vh;

```
```
    
```
```
background:

```
```
      var(--gradient-hero-glow),
      var(--gradient-page);
  }

  * {
    
```
```
border-color: var(--border-default);

```
```
  }
}

@layer
```
```
 components {

```
```
  
```
```
.eg-app-shell {

```
```
    
```
```
@apply mx-auto min-h-screen max-w-app px-4 pb-10 pt-4;

```
```
  }

  .eg-section-label {
    @apply mb-2 text-xs font-medium uppercase tracking-label text-entheogen-text-muted;
  }

  
```
```
.eg-glass {

```
```
    @apply border border-entheogen-border rounded-xl bg-entheogen-surface backdrop-blur-sm;
  }

  
```
```
.eg-card {

```
```
    
```
```
@apply eg-glass shadow-soft p-5;

```
```
    
```
```
background-image: var(--gradient-surface);

```
```
  }

  
```
```
.eg-focus {

```
```
    @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-entheogen-brand-primary/50;
  }
}

```
  
**Component library spec**  
  
**1) AppShell**  
**1) AppShell**  
  
Use for supplementary pages to preserve the narrow, centered, mobile-first layout.  
Use for supplementary pages to preserve the narrow, centered, mobile-first layout.  
  
```
type AppShellProps = {
  
```
```
children: React.ReactNode;

```
```
  
```
```
header?: React.ReactNode;

```
```
};
```
```


```
  
Behavior:  
	•	max-width: 480px  
	•	page background uses entheogen-page  
	•	page background uses entheogen-page  
	•	top spacing is compact  
	•	all major pages stay single-column  
  
Example:  
Example:  
  
```
export function AppShell({ children, header }: AppShellProps) {
  
```
```
return (

```
```
    <div className="min-h-screen bg-entheogen-page text-entheogen-text-primary">
      <
```
```
div className="eg-app-shell">

```
```
        {header}
        {children}
      </div>
    </
```
```
div>

```
```
  );
}
```
```


```
  
**2) TopBar**  
  
Brand mark left, lightweight menu/action right.  
Brand mark left, lightweight menu/action right.  
  
```
type TopBarProps = {
  
```
```
logo?: React.ReactNode;

```
```
  
```
```
title?: string;

```
```
  
```
```
actions?: React.ReactNode;

```
```
};
```
```


```
  
Style:  
	•	bottom divider: subtle 1px border  
	•	strong brand text  
	•	no heavy elevation  
  
**3) SectionLabel**  
  
Uppercase microcopy for field groups.  
  
```
type SectionLabelProps = {
  children: React.ReactNode;
};
```
```


```
  
Style:  
	•	12px  
	•	medium weight  
	•	letter spacing wide  
	•	muted color  
  
**4) SelectField**  
  
Rounded glass select for substance pickers.  
  
```
type SelectFieldOption = {
  label: string;
  
```
```
value: string;

```
```
};

type
```
```
 SelectFieldProps = {

```
```
  label?: string;
  placeholder?: string;
  
```
```
value?: string;

```
```
  options: SelectFieldOption[];
  
```
```
onChange: (value: string) => void;

```
```
  
```
```
disabled?: boolean;

```
```
};

```
  
Style:  
	•	height 56px  
	•	radius 20px  
	•	radius 20px  
	•	left text aligned  
	•	right chevron  
	•	background bg-surface + gradient overlay  
	•	background bg-surface + gradient overlay  
	•	border subtle  
	•	placeholder italic or low-contrast secondary  
  
**5) Button**  
  
Supports primary, secondary, ghost, danger.  
  
```
type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

type
```
```
 ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {

```
```
  
```
```
variant?: ButtonVariant;

```
```
  
```
```
leadingIcon?: React.ReactNode;

```
```
  
```
```
trailingIcon?: React.ReactNode;

```
```
};
```
```


```
  
Variants:  
	•	primary: large full-width CTA, centered label, brand-accent icon  
	•	secondary: subdued fill, muted text  
	•	ghost: transparent with border  
	•	ghost: transparent with border  
	•	danger: only for high-risk actions, red accents  
  
Reference classes:  
  
```
const buttonVariants = {
  
```
```
primary:

```
```
    "bg-entheogen-surface border border-entheogen-border rounded-xl text-entheogen-text-primary shadow-soft " +
    
```
```
"hover:bg-entheogen-surfaceStrong active:scale-[0.985]",

```
```
  secondary:
    "bg-entheogen-surface/70 border border-entheogen-border rounded-pill text-entheogen-text-secondary",
  
```
```
ghost:

```
```
    
```
```
"bg-transparent border border-entheogen-border rounded-pill text-entheogen-text-secondary",

```
```
  
```
```
danger:

```
```
    
```
```
"bg-entheogen-danger-soft border border-red-500/30 rounded-xl text-red-300",

```
```
};
```
```


```
  
**6) PillBadge**  
  
For guidance category headers like “ENTHEOGENIC INTERACTION GUIDANCE”.  
For guidance category headers like “ENTHEOGENIC INTERACTION GUIDANCE”.  
  
```
type PillBadgeProps = {
  
```
```
children: React.ReactNode;

```
```
  
```
```
icon?: React.ReactNode;

```
```
  tone?: "default" | "info" | "success" | "danger";
};
```
```


```
  
Style:  
	•	pill radius  
	•	compact horizontal padding  
	•	thin border  
	•	uppercase tracking  
	•	slight tint based on tone  
  
**7) Panel**  
  
General-purpose content surface.  
General-purpose content surface.  
  
```
type PanelProps = {
  children: React.ReactNode;
  
```
```
title?: React.ReactNode;

```
```
  
```
```
headerSlot?: React.ReactNode;

```
```
};
```
```


```
  
Style:  
	•	radius 24px  
	•	padding 20px  
	•	padding 20px  
	•	glass surface  
	•	optional divider under header  
  
**8) RiskCard**  
  
Hero classification card for result states.  
  
```
type RiskLevel = "safe" | "caution" | "danger";

type RiskCardProps = {
  
```
```
level: RiskLevel;

```
```
  
```
```
title: string;

```
```
  
```
```
description: string;

```
```
  
```
```
action?: React.ReactNode;

```
```
  
```
```
icon?: React.ReactNode;

```
```
};
```
```


```
  
Style rules:  
	•	all centered  
	•	icon in rounded square badge  
	•	larger headline, two-line capable  
	•	danger version uses entheogen-danger  
	•	safe and caution should keep same structure, only semantic colors change  
  
Recommended mapping:  
	•	safe: green emphasis  
	•	safe: green emphasis  
	•	caution: amber emphasis  
	•	caution: amber emphasis  
	•	danger: red emphasis with dark maroon background  
  
**9) EvidencePanel**  
  
Dense, readable evidence readout.  
Dense, readable evidence readout.  
  
```
type EvidencePanelProps = {
  
```
```
eyebrow?: string;

```
```
  
```
```
title: string;

```
```
  
```
```
children: React.ReactNode;

```
```
  
```
```
icon?: React.ReactNode;

```
```
};

```
  
Style:  
	•	header tint brand.info  
	•	paragraph text slightly larger than metadata labels  
	•	support inline bold for key facts  
	•	line-height about 1.65  
	•	line-height about 1.65  
  
**10) SupportingText**  
  
For disclaimer/footer copy.  
For disclaimer/footer copy.  
  
```
type SupportingTextProps = {
  
```
```
children: React.ReactNode;

```
```
};
```
```


```
  
Style:  
	•	centered  
	•	italic optional  
	•	low emphasis  
	•	max width constrained for readability  
  
**Suggested React primitives**  
  
import { ChevronDown, Menu, RotateCcw, Sparkles, AlertCircle } from "lucide-react";  
import { ChevronDown, Menu, RotateCcw, Sparkles, AlertCircle } from "lucide-react";  
  
**Example implementations**  
  
**Button.tsx**  
**Button.tsx**  
  
```
import * as React from "react";
import
```
```
 { cn } from "./cn";

```
```

const
```
```
 variants = {

```
```
  
```
```
primary:

```
```
    
```
```
"inline-flex h-16 w-full items-center justify-center gap-2 rounded-xl border border-entheogen-border bg-entheogen-surface px-6 text-base font-semibold tracking-[0.14em] text-entheogen-text-primary shadow-soft transition-all duration-med ease-standard hover:bg-entheogen-surfaceStrong active:scale-[0.985]",

```
```
  secondary:
    
```
```
"inline-flex h-11 items-center justify-center gap-2 rounded-pill border border-entheogen-border bg-white/[0.03] px-5 text-sm font-semibold uppercase tracking-[0.14em] text-entheogen-text-secondary transition-all duration-fast ease-standard hover:bg-white/[0.05]",

```
```
  
```
```
ghost:

```
```
    
```
```
"inline-flex h-11 items-center justify-center gap-2 rounded-pill border border-entheogen-border bg-transparent px-5 text-sm font-semibold uppercase tracking-[0.14em] text-entheogen-text-secondary transition-all duration-fast ease-standard hover:bg-white/[0.03]",

```
```
  
```
```
danger:

```
```
    "inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-red-500/25 bg-red-500/10 px-5 text-sm font-semibold uppercase tracking-[0.14em] text-red-300 transition-all duration-fast ease-standard hover:bg-red-500/15",
} as const;

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  
```
```
variant?: keyof typeof variants;

```
```
  leadingIcon?: React.ReactNode;
  
```
```
trailingIcon?: React.ReactNode;

```
```
};

export
```
```
 function Button({

```
```
  className,
  variant = "primary",
  leadingIcon,
  trailingIcon,
  children,
  ...props
}: Props) {
  
```
```
return (

```
```
    <button className={cn(variants[variant], "eg-focus", className)} {...props}>
      {leadingIcon}
      <
```
```
span>{children}</span>

```
```
      {trailingIcon}
    </button>
  );
}

```
  
**SelectField.tsx**  
**SelectField.tsx**  
  
```
type Option = { label: string; value: string };

type
```
```
 SelectFieldProps = {

```
```
  
```
```
label?: string;

```
```
  value?: string;
  
```
```
placeholder?: string;

```
```
  
```
```
options: Option[];

```
```
  
```
```
onChange: (value: string) => void;

```
```
  disabled?: boolean;
};

export function SelectField({
  label,
  value,
  placeholder = "Select an option",
  options,
  onChange,
  disabled,
}: SelectFieldProps) {
  
```
```
return (

```
```
    <
```
```
label className="block">

```
```
      {label ? <
```
```
div className="eg-section-label">{label}</div> : null}

```
```
      <
```
```
div className="relative">

```
```
        <select
          
```
```
value={value ?? ""}

```
```
          
```
```
disabled={disabled}

```
```
          onChange={(e) => onChange(e.target.value)}
          className="eg-focus h-14 w-full appearance-none rounded-xl border border-entheogen-border bg-entheogen-surface px-5 pr-12 text-base text-entheogen-text-primary shadow-soft backdrop-blur-sm transition-all duration-fast ease-standard disabled:opacity-50"
        >
          <
```
```
option value="" disabled>

```
```
            {placeholder}
          </
```
```
option>

```
```
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </
```
```
select>

```
```
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-entheogen-text-secondary" />
      </div>
    </label>
  );
}
```
```


```
  
**RiskCard.tsx**  
  
```
import { AlertCircle, CheckCircle2, ShieldAlert } from "lucide-react";
import
```
```
 { cn } from "./cn";

```
```

const
```
```
 riskStyles = {

```
```
  
```
```
safe: {

```
```
    wrap: "bg-entheogen-surface border-entheogen-border",
    
```
```
icon: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",

```
```
  },
  
```
```
caution: {

```
```
    wrap: "bg-amber-500/10 border-amber-500/20",
    
```
```
icon: "bg-amber-500/10 text-amber-300 border border-amber-500/20",

```
```
  },
  danger: {
    wrap: "bg-entheogen-danger border-red-500/20",
    
```
```
icon: "bg-red-500/10 text-red-400 border border-red-500/20",

```
```
  },
} 
```
```
as const;

```
```

const
```
```
 defaultIcons = {

```
```
  safe: <CheckCircle2 className="h-7 w-7" />,
  caution: <ShieldAlert className="h-7 w-7" />,
  
```
```
danger: <AlertCircle className="h-7 w-7" />,

```
```
};

type
```
```
 RiskLevel = keyof typeof riskStyles;

```
```

type RiskCardProps = {
  
```
```
level: RiskLevel;

```
```
  title: string;
  description: string;
  
```
```
action?: React.ReactNode;

```
```
  
```
```
icon?: React.ReactNode;

```
```
};

export function RiskCard({
  level,
  title,
  description,
  action,
  icon,
}: RiskCardProps) {
  return (
    <
```
```
section

```
```
      className={cn(
        "
```
```
rounded-[28px] border p-8 text-center shadow-soft",

```
```
        
```
```
riskStyles[level].wrap

```
```
      )}
    >
      <div
        
```
```
className={cn(

```
```
          "
```
```
mx-auto mb-8 flex h-18 w-18 items-center justify-center rounded-[20px]",

```
```
          riskStyles[level].icon
        )}
      >
        {icon ?? defaultIcons[level]}
      </div>

      <
```
```
h2 className="mx-auto max-w-[14ch] text-4xl font-bold uppercase leading-[1.05] text-entheogen-text-primary">

```
```
        {title}
      </
```
```
h2>

```
```

      <
```
```
p className="mx-auto mt-5 max-w-[26ch] text-lg leading-8 text-entheogen-text-primary/90">

```
```
        {description}
      </
```
```
p>

```
```

      {action ? <
```
```
div className="mt-8">{action}</div> : null}

```
```
    </
```
```
section>

```
```
  );
}
```
```


```
  
**Design rules for supplementary pages**  
  
Keep these consistent:  
	•	Stay dark-first only.  
	•	Use a single-column layout even on desktop, unless the page is clearly data-dense.  
	•	Use rounded containers everywhere; avoid sharp-corner tables or modals.  
	•	Prefer subtle borders over strong shadows.  
	•	Use semantic color only when content meaning changes.  
	•	Keep motion understated: fade, slight scale, slight border brightening.  
	•	Labels are uppercase and spaced; body copy is calm and readable.  
	•	Avoid bright gradients except as faint atmospheric background treatment.  
  
**Naming convention**  
  
Recommended component prefixes:  
	•	EgAppShell  
	•	EgTopBar  
	•	EgTopBar  
	•	EgPanel  
	•	EgButton  
	•	EgButton  
	•	EgSelectField  
	•	EgRiskCard  
	•	EgRiskCard  
	•	EgEvidencePanel  
	•	EgEvidencePanel  
	•	EgPillBadge  
	•	EgPillBadge  
  
Recommended token prefixes:  
	•	--bg-*  
	•	--text-*  
	•	--text-*  
	•	--brand-*  
	•	--brand-*  
	•	--danger-*  
	•	--radius-*  
  
If you want this packaged as a single design-system.tsx file plus globals.css, I can format it into a drop-in starter.  
If you want this packaged as a single design-system.tsx file plus globals.css, I can format it into a drop-in starter.  
