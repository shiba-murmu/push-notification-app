import * as motion from 'motion/react-client';

export default function Button_tap_animate({ children }) {
    return (
        <>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
            >
                {children}
            </ motion.div>
        </>
    )

}