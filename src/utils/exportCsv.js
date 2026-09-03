export const downloadCSV = (data, filename = 'export.csv') => {
  if (!data || data.length === 0) {
    alert("No data available to export.");
    return;
  }

  // Get headers from first object
  const headers = Object.keys(data[0]);
  
  // Convert objects to CSV rows
  const csvRows = [];
  csvRows.push(headers.join(',')); // Add header row

  for (const row of data) {
    const values = headers.map(header => {
      const val = row[header];
      // Escape quotes and wrap in quotes to handle commas in values
      if (typeof val === 'string') {
        return `"${val.replace(/"/g, '""')}"`;
      }
      if (typeof val === 'object' && val !== null) {
        return `"${JSON.stringify(val).replace(/"/g, '""')}"`;
      }
      return val !== null && val !== undefined ? val : '';
    });
    csvRows.push(values.join(','));
  }

  const csvString = csvRows.join('\n');
  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
  
  // Create download link
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
