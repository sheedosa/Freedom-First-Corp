import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

type Props = {
  /** Background color of the section above this divider (defaults to white) */
  fromColor?: string;
  /** Background color of the section below this divider (defaults to navy gradient start) */
  toColor?: string;
  /** Small monospace label shown on either side of the rule. e.g. "→ SECTION 03 / GLOBAL OPERATIONS" */
  label?: string;
};

/**
 * Thin horizontal band that bridges two sections of different background tones.
 * Top half matches the section above, bottom half fades into the section below.
 * Center hosts a red horizontal rule + small monospace markers — industrial / blueprint feel.
 */
export const IndustrialDivider = ({
  fromColor = '#ffffff',
  toColor = '#001428',
  label = 'SECTION 03 · GLOBAL OPERATIONS',
}: Props) => {
  return (
    <div
      aria-hidden
      className="relative w-full h-24 md:h-28 overflow-hidden"
      style={{ background: `linear-gradient(to bottom, ${fromColor} 0%, ${fromColor} 35%, ${toColor} 100%)` }}
    >
      {/* Center: rule + markers */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="flex items-center gap-3 md:gap-6 max-w-4xl w-full">
          {/* Left marker */}
          <span className="hidden md:inline text-navy-deep/40 font-mono text-[10px] tracking-[0.3em] uppercase whitespace-nowrap">
            {label.split('·')[0]?.trim()}
          </span>

          {/* Animated red rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex-1 h-[1px] bg-red-freedom origin-center"
          />

          {/* Center chevron */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-7 h-7 rounded-full flex items-center justify-center bg-red-freedom/10 border border-red-freedom/30 shrink-0"
          >
            <ChevronDown className="w-4 h-4 text-red-freedom" strokeWidth={2} />
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex-1 h-[1px] bg-red-freedom origin-center"
          />

          {/* Right marker */}
          <span className="hidden md:inline text-navy-deep/40 font-mono text-[10px] tracking-[0.3em] uppercase whitespace-nowrap">
            {label.split('·')[1]?.trim()}
          </span>
        </div>
      </div>
    </div>
  );
};
