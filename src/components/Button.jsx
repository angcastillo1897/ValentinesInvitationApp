import PropTypes from 'prop-types';
import { motion } from 'motion/react';

const buttonTypes = {
    primary: 'bg-pink-600 text-white font-bold rounded-full hover:bg-pink-700',
    secondary: 'bg-gray-200 text-gray-800 font-bold rounded-full hover:bg-gray-300',
};

const Button = ({ onClick, children, className = "", type = "primary",style={}  }) => {

    let {left=0,bottom=0,scale=1}=style

    return (
        <motion.button
        onClick={onClick}
        className={`py-3 px-6 cursor-pointer w-max lg:text-lg ${buttonTypes[type]} ${className}`}
        style={style}
        initial={{ x: 0, y: 0,scale: 1 }}
        animate={{ x: left, y: bottom ,scale }}
        transition={{ type: "spring", stiffness: 300 }}
        >
        {children}
        </motion.button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'secondary']),
    style: PropTypes.object,
};


export default Button;




