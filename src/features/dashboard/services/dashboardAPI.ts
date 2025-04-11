export const fetchDashboardData = async (): Promise<{ stats: string[] }> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        stats: ['10 Users', '4 Projects', '7 Tasks Completed'],
      });
    }, 2000); // Simulate network latency
  });
};
