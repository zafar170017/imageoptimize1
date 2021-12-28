import React, { Component,useState } from 'react';
//import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import background from './Image/main.png';
import { CalloutCard,ButtonGroup,DataTable, Subheading, Link, Page, TextField, Button, Heading, Select, RadioButton, Stack, Card, Layout, Checkbox, ProgressBar, TextStyle, DisplayText, List, Banner } from '@shopify/polaris';
// import firstImage from './Image/firstClass.svg'
// import support from './Image/support.svg';
// import review from './Image/review.jpg';
import ManualFile from '../ManualUploader/ManualFile';
import SelectProducts from '../selectProducts/selectProduct';


function Dashboard(){
    const [showDashboard, setShowDashboard] = useState(true);
    const [showManualUpload, setshowManualUpload] = useState(false);
    const hideDashboard = () => setShowDashboard(false);
    const showManualUploadCmp = () => setshowManualUpload(true);
        
    function RedirectToPage(){
 
        hideDashboard();
        debugger
        RedirectToPage1();
    }
    function RedirectToPage1(){
        showManualUploadCmp();
    }
    const rows = [
            ['10/28/2021', 'Finished', 124689, '12MB', '120MB', '10.5K%', 'Details'],

            ['10/28/2021', 'Finished', 124689, '12MB', '120MB', '10.5K%', 'Details'],

        ];
        return (
            <div>
            { showDashboard ?
            <Page>
                <Heading element="h1"> Image Optimize Dashboard</Heading>
                <p>With its best-in-class algorithms Image Optimizer gives you an incredible level of image compression and optimization.</p>
                <br />
                <Banner
                    title="You've reached the Free plan limit"
                    action={{ content: 'Recheck', url: '' }}
                    secondaryAction={{ content: 'Uprade Plan' }}
                    status="info"
                    onDismiss={() => { }}
                >
                    <p>There are 12 images that can be optimized.</p>


                </Banner>
                <br />
                <div className="row">
                    <div className="col-md-4">
                        <Layout>
                            <Layout.Section>
                                <Card title="Your Average Savings" sectioned>
                                    <p>Products</p>
                                    <br/>    <br/><br/>
                                    <Card title="Products" sectioned>
                                    <List >
  <List.Item>Total :<b> 62/List.Item</b></List.Item>
  <List.Item>Compress :<b> N/A</b></List.Item>
  <List.Item>Restore :<b> N/A</b></List.Item>
</List>
</Card>
                                
                                </Card>
                            </Layout.Section>
                        </Layout>
                    </div>

                    <div className="col-md-4">
                        <Layout>
                            <Layout.Section>
                                <Card title="Account Overview" sectioned>
                                    <p>View a summary  store’s performance.</p>
                                    <br/>    <br/><br/>
                                    <Card title="Assets" sectioned>
                                    <List >
  <List.Item>Total :<b> N/A </b></List.Item>
  <List.Item>Compress :<b> N/A</b></List.Item>
  <List.Item>Restore :<b> N/A</b></List.Item>
</List>
</Card>
                                
                                </Card>
                            </Layout.Section>
                        </Layout>
                    </div>

                    <div className="col-md-4">
                        <Layout>
                            <Layout.Section>
                                <Card title="Your Average Savings" sectioned>
                                    <div className="planeLevel">Plan Level

                                    </div>

                                    <div className="planeLevel">
                                        <Link url="#">Free plan</Link>

                                    </div><br />
                                    <div className="planeLevel">Mode

                                    </div>

                                    <div className="planeLevel">
                                        <Link url="#">Automatic</Link>

                                    </div>
                                    <br />
                                    <div className="planeLevel">Current Usage

                                    </div>

                                    <div className="planeLevel">
                                        <p>10 Images</p>

                                    </div>
                                    <br /> <br/> 
                                    <div className="planeLevel"><Button primary>Add product</Button>
                                   
                                    </div>


                                </Card>
                            </Layout.Section>
                        </Layout>
                    </div>

                </div>

                <br />
                <div className="row">
                    <div className="col-md-6">
                        <Layout>
                            <Layout.Section>
                                <Card sectioned>
                                    <div className="heading">
                                        <Heading element="h1">Automatically check for new images</Heading>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <p>Image Optimizer will periodically check for and optimize new product, collection, asset, and blog post featured images.</p>
                                            <br />
                                            <Button destructive disabled>
                                                Buy shipping label
                                            </Button>
                                        </div>
                                        <div className="col-md-4">
                                            {/* <img src={firstImage} /> */}
                                        </div>
                                    </div>
                                </Card>
                            </Layout.Section>
                        </Layout>


                    </div>
                    <div className="col-md-6">
                        <Layout>
                            <Layout.Section>
                                <Card sectioned>
                                    <div className="heading">
                                        <Heading element="h1">Manual File Uploader</Heading>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <p>You need to manually compress some images such as homepage slides, blog images, etc. </p>
                                            <br /><br/>
                                            <Button onClick={RedirectToPage}>
                                                Manual Uploader
                                            </Button>
                                        </div>
                                        <div className="col-md-4">
                                            {/* <img src={firstImage} /> */}
                                        </div>
                                    </div>
                                </Card>
                            </Layout.Section>
                        </Layout>


                    </div>
                </div>
                <br />
                <Layout>
                    <Layout.Section>

                        <Card title="Optimization History" sectioned>
                            <DataTable
                                columnContentTypes={[
                                    'text',
                                    'numeric',
                                    'numeric',
                                    'text',
                                    'text',
                                    'text'
                                ]}
                                headings={[
                                    'Product',
                                    'Status',
                                    'Images',
                                    'Original',
                                    'Optimized',
                                    , 'Saved',
                                    'Saved %'
                                ]}
                                rows={rows}

                                footerContent={`Showing ${rows.length} of ${rows.length} results`}
                            />
                        </Card>
                    </Layout.Section>
                </Layout>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <Layout>
                            <Layout.Section>
                                <Card sectioned>
                                    <div className="heading">
                                        <Heading element="h1">Need Help?</Heading>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <p>Available: Monday - Friday, 9am to 6pm ACDT
                                                <br /><br />
                                                The Image Optimizer Customer Success Team is based in Adelaide, South Australia and will promptly reply to all questions
                                            </p>
                                            <br />
                                            <Button >
                                                Contact Us
                                            </Button>
                                        </div>
                                        <div className="col-md-4">
                                            {/* <img src={support} /> */}
                                        </div>
                                    </div>
                                    <br/>
                                </Card>
                            </Layout.Section>
                        </Layout>


                    </div>
                    <div className="col-md-6">
                        <Layout>
                            <Layout.Section>
                                <Card sectioned>
                                    <div className="heading">
                                        <Heading element="h1">Manual File Uploader</Heading>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <br />
                                            <p>Thank you for choosing Image Optimizer to compress and optimize your images! </p>
                                            <br />
                                            <Heading element="h1">Like Image OPtimize?</Heading>
                                            <br /><br />
                                            <ButtonGroup>
                                                <Button>Not Really</Button>
                                                <Button primary>Yes!</Button>
                                            </ButtonGroup>
                                        </div>
                                        <div className="col-md-4">
                                            {/* <img src={review} className="img1" /> */}
                                        </div>
                                    </div>
                                </Card>
                            </Layout.Section>
                        </Layout>


                    </div>
                </div>
            </Page>
                           :null 
                         
                         }
            
            {
                showManualUpload ?
                <SelectProducts/>
                :null
            }
          </div>
        );
    }


export default Dashboard;