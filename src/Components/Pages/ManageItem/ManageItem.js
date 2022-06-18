import React from 'react';
import DynamicTitle from '../../SharedPages/DynamicTitle/DynamicTitle';
import { motion } from "framer-motion";

const ManageItem = () => {
    return (
        <motion.div initial={{width : 0}}
        animate={{width: '100%'}}
        exit={{x: window.innerWidth, transition:{duration : 0.1}}}>
            <DynamicTitle name='Manage Item' />
            <h1>this is manage item page</h1>
        </motion.div>
    );
};

export default ManageItem;