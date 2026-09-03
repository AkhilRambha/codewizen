const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let modifiedCount = 0;

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it uses useLocalStorage
    if (content.includes('useLocalStorage')) {
      // 1. Replace the import statement
      // Some use "useLocalStorage" from "../../../hooks/useLocalStorage" or "../../hooks/useLocalStorage"
      content = content.replace(/import useLocalStorage from ['"](.*)\/useLocalStorage['"];/g, "import useFirebaseData from '$1/useFirebaseData';");
      
      // 2. Replace the hook call
      content = content.replace(/useLocalStorage\(/g, "useFirebaseData(");
      
      fs.writeFileSync(filePath, content, 'utf8');
      modifiedCount++;
      console.log(`Modified: ${filePath}`);
    }
  }
});

console.log(`Completed. Modified ${modifiedCount} files.`);
