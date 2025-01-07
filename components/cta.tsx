import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function CTA() {
  return (
    <motion.div
      className="flex w-full max-w-2xl flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full bg-muted/80 text-center">
            <AnimatedShinyText className="px-4 py-1">
              <span>Coming soon</span>
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

      <div className="flex items-center justify-center">
        <motion.img
          src="/logo.svg"
          alt="logo"
          className="mr-1 h-20 w-20"
          variants={itemVariants}
        />
        <TextBlur
            className="text-center text-3xl font-medium tracking-tighter sm:text-4xl"
            text="banner.so"
        />
      </div>
      <br />
      <br />
      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-3xl font-medium tracking-tighter sm:text-5xl"
          text="AI-Powered"
        />
        <TextBlur
          className="text-center text-3xl font-medium tracking-tighter sm:text-5xl"
          text="Animated Ads"
        />
      </motion.div>
      <br/>
      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto max-w-[27rem] pt-1.5 text-center text-base text-zinc-300 sm:text-lg"
          text="Get early access, and be the first to try out"
          duration={0.8}
        />
        {/* <TextBlur
          className="mx-auto max-w-[27rem] pt-1.5 text-center text-base text-zinc-300 sm:text-lg"
          text="AI-powered animated ad banners platform."
          duration={0.8}
        /> */}
      </motion.div>
    </motion.div>
  );
}
