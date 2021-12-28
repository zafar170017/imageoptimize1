//import './ManualFile.css';

import React, { useCallback, useState } from 'react';
import { Caption, DropZone,Thumbnail,ButtonGroup, TextContainer, TextField, Button, Heading, Select, RadioButton, Stack, Card, Layout, Checkbox, ProgressBar, TextStyle, DisplayText, List, Banner, Page, Badge } from '@shopify/polaris';
import Dashboard from '../Dashboard/Dashboard';

export default function ManualFile() {
    const [showDashboard, setShowDashboard] = useState(false);
    const [showManualUpload, setshowManualUpload] = useState(true);
    const showDashboardCmp = () => setShowDashboard(true);
    const hideManualUploadCmp = () => setshowManualUpload(false);
        
    function RedirectToPage(){
        hideManualUploadCmp();
        showDashboardCmp();
    }
    const [selected, setSelected] = useState('today');

    const handleSelectChange = useCallback((value) => setSelected(value), []);
    const options = [
        { label: 'Do not resize', value: '0' },
        { label: '4000px', value: '4000' },
        { label: '2048px (Recommended by Shopify)', value: '2048' },
        { label: '1600px', value: '1600' },
        { label: '1200px (Recommended by TinyIMG)', value: '1200' },
        { label: '1024px', value: '1024' },
        { label: '1000', value: '1000' },
        { label: '1000', value: '1000' },
    ];

    const [isFirstButtonActive, setIsFirstButtonActive] = useState(true);

    const handleFirstButtonClick = useCallback(() => {
        if (isFirstButtonActive) return;
        setIsFirstButtonActive(true);
    }, [isFirstButtonActive]);

    const handleSecondButtonClick = useCallback(() => {
        if (!isFirstButtonActive) return;
        setIsFirstButtonActive(false);
    }, [isFirstButtonActive]);
    const [files, setFiles] = useState([]);
    const handleDropZoneDrop = useCallback(
        (_dropFiles, acceptedFiles, _rejectedFiles) =>
          setFiles((files) => [...files, ...acceptedFiles]),
        []
      );
      const fileUpload = !files.length && <DropZone.FileUpload />;
  const uploadedFiles = files.length > 0 && (
    <Stack vertical>
      {files.map((file, index) => (
        <Stack alignment="center" key={index}>
          <Thumbnail size="small" alt={file.name} />
          <div>
            {file.name} <Caption>{file.size} bytes</Caption>
          </div>
        </Stack>
      ))}
    </Stack>
  );
    return (
        <div>
        {showManualUpload ?
        
        <Page
            
            title="Manual File Uploader"
            titleMetadata={<Badge status="attention">Verified</Badge>}
        >
            <br /><br />

            <div className="MoveBack">
                <Button primary onClick={RedirectToPage}>Dashboard</Button>
                </div>
                <br/>
            <Banner
                status="info"

            >
                <p>Image Optimizer can automatically compress Product, Collection, Asset, and Blog Post Featured images. Before adding an image in Online Store - Themes - Customize, or before uploading it to Settings  Files, upload it to the app, download it, and upload it to Shopify.</p>
            </Banner>
            <br />
            <Layout>
                <Layout.Section>
                    <Card sectioned>

                        <Heading element="h1">Settings</Heading>
                        <br />
                        <div className="row">
                            <div className="col-md-6">
                                <TextContainer>
                                    <p className="para1">Compression method</p>
                                </TextContainer>
                            </div>
                            <div className="col-md-6">
                                <ButtonGroup segmented>
                                    <Button pressed={isFirstButtonActive} onClick={handleFirstButtonClick}>
                                        Lossy
                                    </Button>
                                    <Button pressed={!isFirstButtonActive} onClick={handleSecondButtonClick}>
                                        Lossless
                                    </Button>
                                </ButtonGroup>
                            </div>
                            <br /><br /><br /><hr />

                            <div className="col-md-6">
                                <TextContainer>
                                    <p className="para2 mt-5">Convert PNG to JPG</p>
                                </TextContainer>
                            </div>
                            <div className="col-md-6">
                                <br />
                                <ButtonGroup segmented>
                                    <Button pressed={isFirstButtonActive} onClick={handleFirstButtonClick}>
                                        Yes
                                    </Button>
                                    <Button pressed={!isFirstButtonActive} onClick={handleSecondButtonClick}>
                                        No
                                    </Button>
                                </ButtonGroup>
                            </div>
                            <br /><br /><br /><br /><hr />

                            <div className="col-md-6">
                                <TextContainer>
                                    <p className="para2 mt-5">Resize</p>
                                </TextContainer>
                            </div>
                            <div className="col-md-6">
                                <br />
                                <Select

                                    options={options}
                                    onChange={handleSelectChange}
                                    value={selected}
                                />
                            </div>
                            <br /><br /><br /><br /><hr />
                            <div className="col-md-6">
                                <TextContainer>
                                    <p className="para2 mt-5">square</p>
                                </TextContainer>
                            </div>
                            <div className="col-md-6">
                                <br />
                                <ButtonGroup segmented>
                                    <Button pressed={isFirstButtonActive} onClick={handleFirstButtonClick}>
                                        Yes
                                    </Button>
                                    <Button pressed={!isFirstButtonActive} onClick={handleSecondButtonClick}>
                                        No
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                      
                    </Card>
                </Layout.Section>
            </Layout>
            <br/>
            <Layout>
                <Layout.Section>
                    <Card sectioned>
                    <DropZone onDrop={handleDropZoneDrop}>
      {uploadedFiles}
      {fileUpload}
    </DropZone>
                        </Card>
                        </Layout.Section>
                        </Layout>
        </Page>
    :null}
    {
        showDashboard ?
        <Dashboard/>
        :null
    }
    </div>
    );

}
