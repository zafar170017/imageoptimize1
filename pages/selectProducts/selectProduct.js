import React from 'react';
import { Caption, DropZone,Thumbnail,ButtonGroup, TextContainer, TextField, Button, Heading, Select, RadioButton, Stack, Card, Layout, Checkbox, ProgressBar, TextStyle, DisplayText, List, Banner, Page, Badge } from '@shopify/polaris';

import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import store from 'store-js';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class SelectProducts extends React.Component {
  state = { open: false };
  render() {
    // A constant that defines your app's empty state
    const emptyState = !store.get('ids');

    return (
       <Page>
        <TitleBar
          primaryAction={{
            content: 'Select products',
            onAction: () => this.setState({ open: true }),
          }}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        {emptyState ? ( // Controls the layout of your app's empty state
          <Layout>
          <Page
              
              title="Manual File Uploader"
              titleMetadata={<Badge status="attention">Verified</Badge>}
          >
              <br /><br />
  
              <div className="MoveBack">
                  <Button primary >Dashboard</Button>
                  </div>
                  <br/>
              <Banner
                  status="info"
  
              >
                  <p>Image Optimizer can automatically compress Product, Collection, Asset, and Blog Post Featured images. Before adding an image in Online Store - Themes - Customize, or before uploading it to Settings  Files, upload it to the app, download it, and upload it to Shopify.</p>
              </Banner>
              <br />
          </Page>
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
                                      <Button >
                                          Lossy
                                      </Button>
                                      <Button >
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
                                      <Button>
                                          Yes
                                      </Button>
                                      <Button >
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
  
                                      // options={options}
                                     
                                      // value={selected}
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
                                      <Button>
                                          Yes
                                      </Button>
                                      <Button  >
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
                      <DropZone >
      
      </DropZone>
                          </Card>
                          </Layout.Section>
                          </Layout>
          </Layout>
        ) : (
          // Uses the new resource list that retrieves products by IDs
          <Layout>
        <Page
            
            title="Manual File Uploader"
            titleMetadata={<Badge status="attention">Verified</Badge>}
        >
            <br /><br />

            <div className="MoveBack">
                <Button primary >Dashboard</Button>
                </div>
                <br/>
            <Banner
                status="info"

            >
                <p>Image Optimizer can automatically compress Product, Collection, Asset, and Blog Post Featured images. Before adding an image in Online Store - Themes - Customize, or before uploading it to Settings  Files, upload it to the app, download it, and upload it to Shopify.</p>
            </Banner>
            <br />
        </Page>
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
                                    <Button >
                                        Lossy
                                    </Button>
                                    <Button >
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
                                    <Button pressed={isFirstButtonActive}>
                                        Yes
                                    </Button>
                                    <Button pressed={!isFirstButtonActive} >
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
        </Layout>
        )}
      </Page>
    );
  }
  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false });
    store.set('ids', idsFromResources);
  };
}

export default SelectProducts;
