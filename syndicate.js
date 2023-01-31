const fs = require( 'fs' );
const path = require( 'path' );
const matter = require('gray-matter')

const readDir = '_posts';
const footer = `
Say Hello! [YouTube](https://youtube.com/codeSTACKr) | [Twitter](https://twitter.com/codeSTACKr) | [Instagram](https://www.instagram.com/codeSTACKr) | [TikTok](https://www.tiktok.com/@codestackr)
`;

(async ()=>{
  try {
      const files = await fs.promises.readdir( readDir );

      for( const file of files ) {
          const sourcePath = path.join( readDir, file );
          const newPath_devto = path.join( 'syndicate/dev.to', file.split(".")[0] + ".md" );
          const newPath_hashnode = path.join( 'syndicate/hashnode', file.split(".")[0] + ".md" );

          // Dev.to
          fs.access(newPath_devto, fs.F_OK, async (err) => {
            if (err) {
              let fileContents = await fs.promises.readFile(sourcePath, { encoding: 'utf8' })

              fileContents = fileContents
                .replace(/<CH.Code>/g, '')
                .replace(/<\/CH.Code>/g, '')
                .replace(/<base.*?>/g, '')
                .replace(/(!\[.*?\()(.*)(\))/g, '$1https://raw.githubusercontent.com/codeSTACKr/codestackr-com/main/public$2$3')
                .replace(/<YouTubeEmbed.*?id=['|"](.*?)['|"].*>/g, '{% youtube $1 %}')

              fileContents += footer;
            
              await fs.promises.writeFile(newPath_devto, fileContents);
  
              console.log( "Written!", newPath_devto );
              return
            }
            console.log('File already exists')
          })

          // Hashnode
          fs.access(newPath_hashnode, fs.F_OK, async (err) => {
            if (err) {
              let fileContents = await fs.promises.readFile(sourcePath, { encoding: 'utf8' })
              
              fileContents = fileContents
                .replace(/<CH.Code>/g, '')
                .replace(/<\/CH.Code>/g, '')
                .replace(/<base.*?>/g, '')
                .replace(/(!\[.*?\()(.*)(\))/g, '$1https://raw.githubusercontent.com/codeSTACKr/codestackr-com/main/public$2$3')
                .replace(/<YouTubeEmbed.*?id=['|"](.*?)['|"].*>/g, '%[https://youtu.be/$1]')

              fileContents += footer;
            
              await fs.promises.writeFile(newPath_hashnode, fileContents);
  
              console.log( "Written!", newPath_hashnode );
              return
            }
            console.log('File already exists')
          })
      } 
  }
  catch( e ) {
      console.error( "We've thrown! Whoops!", e );
  }
})(); 