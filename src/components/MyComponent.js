import { AnimatePresence, motion } from 'framer-motion';
function MyComponent() {
    return (
      <div>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Your content here */}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
  