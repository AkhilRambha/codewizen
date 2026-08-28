const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (f !== 'Home') {
        walkDir(dirPath, callback);
      }
    } else {
      if (dirPath.endsWith('.jsx')) {
        callback(dirPath);
      }
    }
  });
}

walkDir(pagesDir, (filePath) => {
  const stat = fs.statSync(filePath);
  if (stat.size < 500) {
    const filename = path.basename(filePath, '.jsx');
    
    // Add spaces before capital letters (e.g. JavaFullStack -> Java Full Stack)
    const title = filename.replace(/([A-Z])/g, ' $1').trim();
    
    const content = `import PageHero from "../../components/common/PageHero/PageHero";
import Footer from "../../components/common/Footer/Footer";

function ${filename}() {
  return (
    <>
      <PageHero 
        title="${title}" 
        subtitle="Explore more about ${title} at Codewissen Enterprise." 
      />
      <div style={{ padding: "80px 20px", textAlign: "center", minHeight: "40vh" }}>
        <h2>Content for ${title} coming soon...</h2>
      </div>
      <Footer />
    </>
  );
}

export default ${filename};
`;
    fs.writeFileSync(filePath, content);
    console.log(`Updated placeholder: ${filename}`);
  }
});
