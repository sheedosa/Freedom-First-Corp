import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const InsightLibya = () => {
  return (
    <div className="flex-grow flex flex-col bg-off-white">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pt-32 pb-16 overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, #134377 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 to-navy-deep" />
        </div>
        <div className="container relative z-10 px-6 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs font-mono tracking-widest uppercase mb-10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="inline-block bg-red-freedom text-white text-[10px] font-bold font-mono tracking-widest uppercase px-3 py-1.5 rounded-sm">
                Emerging Markets
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-white uppercase leading-[1.0] tracking-[-0.02em]">
              Rebuilding Libya Will Depend on Execution, Not Statements
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-14 md:py-20 bg-white flex-grow">
        <div className="container px-6 mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-7 text-navy-deep/80 text-lg leading-relaxed">
              <p>
                What happens in Libya will shape North Africa, Mediterranean security, migration dynamics, and regional energy flows for decades. Stability will not emerge from statements, conferences, or diplomatic symbolism alone. Recent history has made that clear. Libya's long-term stability will come from functioning power systems, rebuilt infrastructure, reliable essential services, and the sustained operational presence required to make those systems work. That effort is being driven by external actors, and the United States should be leading it.
              </p>
              <p>
                In Libya, speed matters. Delays do not simply cost commercial opportunities. They erode confidence, weaken stability, and create space for competitors and adversaries to establish influence.
              </p>
              <p>
                The United States is not absent because it lacks capability. American firms remain among the most competitive in the world across energy, infrastructure, logistics, engineering, and advanced systems integration. The challenge is structural. Washington still lacks a coherent model for deploying American commercial strength rapidly into fragile or transitional environments. Yet American firms are often the most capable and most willing to operate in difficult conditions.
              </p>
              <p>
                Competitors have adapted faster. China's Belt and Road Initiative integrates financing, diplomacy, construction, and political alignment into a single coordinated offering. They move early, maintain physical presence, and deliver visible results on the ground.
              </p>
              <p>
                The American approach remains fragmented and slow. Institutions such as the U.S. International Development Finance Corporation and EXIM are powerful tools, but they are rarely synchronized for rapid execution. By the time financing, approvals, and support mechanisms align, the strategic window has often narrowed or closed entirely. In many cases, there is not merely delay, but a broader absence of sustained interest.
              </p>
              <p>
                The answer is not more policy papers or strategic frameworks. The answer is a different operating model.
              </p>
              <p>
                American private enterprise should become the lead instrument of economic statecraft in emerging markets. Stability in Libya will not ultimately be created through diplomatic language alone. It will be built by companies that invest capital, construct infrastructure, restore services, create employment, and operate critical systems over time. In practice, durable influence is often established through contracts, transactions, and long-term operational presence.
              </p>
              <p>
                Washington's role should be to enable that effort early and decisively: align financing tools, de-risk projects, support commercial execution, and operate on timelines measured in weeks and months rather than years. The role of government is not to replace American business, but to empower it as the forward edge of American engagement.
              </p>
              <p>
                That requires physical presence. Economic strategy cannot be executed remotely.
              </p>
              <p>
                Trust is not built through virtual or periodic engagement alone. A fully operational U.S. Embassy in Libya would send a clear signal to American firms, Libyan stakeholders, and regional competitors that the United States is serious, committed, and prepared to remain engaged. Meaningful commercial engagement is difficult without meaningful diplomatic presence and support on the ground.
              </p>
              <p>
                No financing package or policy framework can fully substitute for that signal. Presence is not a diplomatic luxury. It is a strategic and competitive necessity. The role of the embassy is not to direct commerce, but to support the American companies willing to execute in difficult environments.
              </p>
              <p>
                This extends beyond Libya. Across emerging markets, development and stability are inseparable. Where American firms invest, build, and remain present, they help shape long-term political and economic outcomes. Where they do not, others will.
              </p>
              <p>
                Libya represents an opportunity to demonstrate that the United States can still compete where it matters most, not by declaring stability, but by helping build it.
              </p>
            </div>
          </motion.div>

          {/* Divider & Back */}
          <div className="mt-10 md:mt-16 pt-8 md:pt-12 border-t border-navy-deep/10 flex items-center justify-between">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-navy-deep font-bold text-xs uppercase tracking-widest hover:text-red-freedom transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Insights
            </Link>
            <a
              href="/#contact"
              className="px-7 py-3.5 bg-red-freedom text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-red-700 transition-all"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
