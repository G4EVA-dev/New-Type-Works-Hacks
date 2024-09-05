import { motion } from 'framer-motion';
import Layout from '../components/Layouts';

const Home = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Organization</h1>
        <p className="text-lg mb-6">Discover why you should join us and how to get involved.</p>
        <a href="/join" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Join Us Now</a>
      </motion.div>
    </Layout>
  );
};

export default Home;
