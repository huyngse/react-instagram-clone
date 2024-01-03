export function timeAgo(timestamp) {
    const seconds = Math.floor((new Date() - timestamp) / 1000);
  
    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1,
    };
  
    let counter;
  
    for (const interval in intervals) {
      counter = Math.floor(seconds / intervals[interval]);
  
      if (counter > 0) {
        if (counter === 1) {
          return `${counter} ${interval} ago`;
        } else {
          return `${counter} ${interval}s ago`;
        }
      }
    }
  
    return 'Just now';
  }