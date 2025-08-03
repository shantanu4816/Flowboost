import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, Activity } from "lucide-react";

interface DataPoint {
  time: string;
  revenue: number;
  users: number;
  efficiency: number;
}

export default function LiveGraph() {
  const [data, setData] = useState<DataPoint[]>([]);
  const [currentMetrics, setCurrentMetrics] = useState({
    revenue: 0,
    users: 0,
    efficiency: 0,
    growth: 0,
  });

  // Generate realistic data points
  useEffect(() => {
    const generateDataPoint = (index: number): DataPoint => {
      const baseRevenue = 50000;
      const growth = Math.sin(index * 0.3) * 10000 + Math.random() * 5000;
      const time = new Date(Date.now() - (29 - index) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      
      return {
        time,
        revenue: Math.max(baseRevenue + growth + index * 2000, 20000),
        users: Math.floor(1000 + index * 50 + Math.random() * 200),
        efficiency: Math.min(75 + index * 2 + Math.random() * 10, 95),
      };
    };

    const initialData = Array.from({ length: 30 }, (_, i) => generateDataPoint(i));
    setData(initialData);

    // Update current metrics
    const latest = initialData[initialData.length - 1];
    const previous = initialData[initialData.length - 2];
    const growth = ((latest.revenue - previous.revenue) / previous.revenue) * 100;

    setCurrentMetrics({
      revenue: latest.revenue,
      users: latest.users,
      efficiency: latest.efficiency,
      growth,
    });

    // Simulate real-time updates
    const interval = setInterval(() => {
      setData(prevData => {
        const newData = [...prevData.slice(1)];
        const lastIndex = prevData.length - 1;
        const newPoint = generateDataPoint(lastIndex + 1);
        newData.push(newPoint);

        // Update metrics
        const growth = ((newPoint.revenue - prevData[prevData.length - 1].revenue) / prevData[prevData.length - 1].revenue) * 100;
        setCurrentMetrics({
          revenue: newPoint.revenue,
          users: newPoint.users,
          efficiency: newPoint.efficiency,
          growth,
        });

        return newData;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const maxRevenue = Math.max(...data.map(d => d.revenue));
  const minRevenue = Math.min(...data.map(d => d.revenue));

  return (
    <motion.div
      className="glass rounded-2xl p-6 border border-[var(--neon-green)]/30 hover:border-[var(--neon-green)] transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold gradient-text mb-2">Live Performance Metrics</h3>
        <p className="text-gray-400">Real-time data showing our platform's growth</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <motion.div
          className="glass p-3 rounded-xl border border-[var(--neon-blue)]/20"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center space-x-2 mb-1">
            <DollarSign className="w-4 h-4 text-[var(--neon-green)]" />
            <span className="text-xs text-gray-400">Revenue</span>
          </div>
          <div className="text-lg font-bold text-white">
            ${(currentMetrics.revenue / 1000).toFixed(0)}K
          </div>
          <div className={`text-xs ${currentMetrics.growth >= 0 ? 'text-[var(--neon-green)]' : 'text-red-400'}`}>
            {currentMetrics.growth >= 0 ? '+' : ''}{currentMetrics.growth.toFixed(1)}%
          </div>
        </motion.div>

        <motion.div
          className="glass p-3 rounded-xl border border-[var(--neon-blue)]/20"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center space-x-2 mb-1">
            <Users className="w-4 h-4 text-[var(--neon-blue)]" />
            <span className="text-xs text-gray-400">Active Users</span>
          </div>
          <div className="text-lg font-bold text-white">
            {currentMetrics.users.toLocaleString()}
          </div>
          <div className="text-xs text-[var(--neon-green)]">+12% today</div>
        </motion.div>

        <motion.div
          className="glass p-3 rounded-xl border border-[var(--neon-green)]/20"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center space-x-2 mb-1">
            <Activity className="w-4 h-4 text-[var(--neon-green)]" />
            <span className="text-xs text-gray-400">Efficiency</span>
          </div>
          <div className="text-lg font-bold text-white">
            {currentMetrics.efficiency.toFixed(0)}%
          </div>
          <div className="text-xs text-[var(--neon-blue)]">+3% this week</div>
        </motion.div>

        <motion.div
          className="glass p-3 rounded-xl border border-[var(--neon-green)]/20"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center space-x-2 mb-1">
            <TrendingUp className="w-4 h-4 text-[var(--neon-blue)]" />
            <span className="text-xs text-gray-400">Growth Rate</span>
          </div>
          <div className="text-lg font-bold text-white">
            {Math.abs(currentMetrics.growth).toFixed(0)}%
          </div>
          <div className="text-xs text-[var(--neon-green)]">Monthly</div>
        </motion.div>
      </div>

      {/* Live Graph */}
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-white">Revenue Trend (30 Days)</h4>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[var(--neon-green)] rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-400">Live</span>
          </div>
        </div>

        <div className="h-64 relative overflow-hidden rounded-xl bg-[var(--dark-card)] border border-gray-700">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 800 200"
            className="absolute inset-0"
          >
            {/* Grid lines */}
            <defs>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--neon-green)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--neon-green)" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {/* Background grid */}
            {[0, 1, 2, 3, 4].map(i => (
              <line
                key={i}
                x1="0"
                y1={i * 40 + 20}
                x2="800"
                y2={i * 40 + 20}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            ))}

            {/* Data line and area */}
            {data.length > 1 && (
              <>
                {/* Area under curve */}
                <path
                  d={`M ${data.map((point, index) => {
                    const x = (index / (data.length - 1)) * 780 + 10;
                    const y = 180 - ((point.revenue - minRevenue) / (maxRevenue - minRevenue)) * 160;
                    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                  }).join(' ')} L 790 180 L 10 180 Z`}
                  fill="url(#areaGradient)"
                />

                {/* Main line */}
                <motion.path
                  d={data.map((point, index) => {
                    const x = (index / (data.length - 1)) * 780 + 10;
                    const y = 180 - ((point.revenue - minRevenue) / (maxRevenue - minRevenue)) * 160;
                    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                  }).join(' ')}
                  fill="none"
                  stroke="var(--neon-green)"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Data points */}
                {data.map((point, index) => {
                  const x = (index / (data.length - 1)) * 780 + 10;
                  const y = 180 - ((point.revenue - minRevenue) / (maxRevenue - minRevenue)) * 160;
                  return (
                    <motion.circle
                      key={index}
                      cx={x}
                      cy={y}
                      r="4"
                      fill="var(--neon-green)"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="drop-shadow-[0_0_6px_var(--neon-green)]"
                    />
                  );
                })}
              </>
            )}
          </svg>

          {/* Floating values */}
          <div className="absolute top-4 right-4 glass p-3 rounded-lg">
            <div className="text-sm text-gray-400">Current</div>
            <div className="text-lg font-bold gradient-text">
              ${(currentMetrics.revenue / 1000).toFixed(0)}K
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}