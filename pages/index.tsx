import { 
  Container, 
  Title, 
  DropzoneSection, 
  DropzoneInputContainer, 
  DropzoneFileInput, 
  DropzoneText,
  Footer,
  FooterText,
  FooterLink,
  FooterImageAvatar,
  LoaderContainer,
  LoadingText,
  Table
} from "../styles/homePage";
import { Download, Tool } from "react-feather";
import Dropzone from 'react-dropzone';
import { useEffect, useState } from "react";
import sendFiles from "../utils/sendFiles";
import { RingLoader } from "react-spinners";
import MimeTypes from 'mime-types';
import { useRouter } from "next/dist/client/router";
import GITHUB_USER_IMAGE from "../utils/constants"

export default function Home(){
  const [files, setFiles] = useState<any>([]);
  const [results, setResults] = useState<any>([]);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getResultFiles(){ 
      const response = await sendFiles(files); 
      setResults(response);
      setFiles([]);
      setLoading(false);
    }

    if(files.length >= 1){ 
      setLoading(true);
      getResultFiles();
    }
  }, [files]);

  async function getFile(index:number){
    const fileDataUrl = 'data:'+MimeTypes.lookup(results[index].filename)+';base64,'+results[index].file;

    let downloadElement = document.getElementById('downloadFile');

    if(!downloadElement){
      const aElement = document.createElement('a')
      aElement.setAttribute('href', fileDataUrl);
      aElement.setAttribute('download', results[index].filename);
      aElement.setAttribute('id', 'downloadFile');
      document.body.appendChild(aElement);
      downloadElement = document.getElementById('downloadFile');
    }
    else{
      downloadElement.setAttribute('href', fileDataUrl);
      downloadElement.setAttribute('download', results[index].filename);
    }
    
    downloadElement?.click();
  }

  function backToStart(){
    setResults([]);
    setFiles([]);
    setLoading(false);
  }

  return(
    <Container>

      <Title onClick={backToStart}>
        <Tool />Metadata Cleaner<Tool />
      </Title>

      { 
        loading ?  (
            <LoaderContainer>
              <RingLoader size={150} loading={loading} color="#6B4F4F" /> 
              <LoadingText>Loading...</LoadingText>
            </LoaderContainer>
          )
          : null 
      }
      {
        results.length <= 0 && !loading  ? (
          <Dropzone multiple={true} onDrop={(acceptedFiles:any) => setFiles(acceptedFiles)}>
                  {({getRootProps, getInputProps}) => (
                    <DropzoneSection>
                      <DropzoneInputContainer {...getRootProps()}>
                        <DropzoneFileInput {...getInputProps()} />
                        <DropzoneText>Drop or click to insert your files!</DropzoneText>
                      </DropzoneInputContainer>
                    </DropzoneSection>
                  )}
          </Dropzone>
        ): null
      }

      {
        results.length > 0 && !loading ? (
          <Table>
            <tr>
              <th>Filename</th>
              <th>Status</th>
              <th>Download</th>
            </tr>
            { results.map((result:any, index:number) => (
              <tr key={index}>
                <td>{result.filename}</td>
                <td>{result.status}</td>
                <td><Download onClick={() => getFile(index)}/></td>

              </tr>
            )) } 
          </Table>
        ) : null
      }
      

      <Footer>
          <FooterText>
            Made by{' '} 
            <FooterLink href={process.env.NEXT_PUBLIC_GITHUB}>
              DPBM
              <FooterImageAvatar src={GITHUB_USER_IMAGE} alt="Dpbm Avatar"/> 
            </FooterLink>
          </FooterText>
      </Footer>

    </Container>
  );
}
