import React, { useCallback, useState } from 'react';
import {Page, TextField, Button, Heading, Select, RadioButton, Stack, Card, Layout, Checkbox, ProgressBar, TextStyle, DisplayText, List, Banner } from '@shopify/polaris';
//import './ImageOptimize.css';
import camera from './camera.png';
import Dashboard from '../Dashboard/Dashboard';
import Image from 'next/image'
function ImageOptimize() {
    const [showDiv1, setshowDiv1] = useState(true);
    const [showDiv2, setshowDiv2] = useState(false);
    const [showDiv3, setshowDiv3] = useState(false);
    const [showDiv4, setshowDiv4] = useState(false);
    const [showDiv5, setshowDiv5] = useState(false);
    const [showDiv6, setshowDiv6] = useState(false);
    const [showDashboard, setDashboard]=useState(false);
    const stepOneHide = () => setshowDiv1(false);
   

    const stepTwoShow = () => setshowDiv2(true);
    const stepTwoHide = () => setshowDiv2(false);
    // to move forward and backward steps
    const stepOneShow= () => setshowDiv1(true);

    const stepThirdShow = () => setshowDiv3(true);
    const stepthirdHide=()=>setshowDiv3(false);
    const stepFourthShow=()=> setshowDiv4(true);
    const stepFourthHide=()=>setshowDiv4(false); 
    const stepFifthHide=()=>setshowDiv5(false); 
    const stepFifthShow=()=>setshowDiv5(true); 
    const stepSixthHide=()=>setshowDiv6(false); 
    const stepSixthShow=()=>setshowDiv6(true);
    const readyShowDashboard=()=>setDashboard(true);
    function forwardStepTwo(){
        stepOneHide();
        stepTwoShow();
    }

   
    function StepMovetoThirdStep(){
        stepThirdShow();
        stepTwoHide();
    }
    function BacktoOneStep(){
        stepOneShow();
        stepTwoHide();
    }
    function BacktoSecondStep(){
        stepTwoShow();
        stepthirdHide();
    }
    function MovetoFourthStep(){
        stepthirdHide();
        stepFourthShow();
    }
    function BackToThirdStep(){
        stepFourthHide();
        stepThirdShow();
    }
    function MoveToLastStep(){
        stepFourthHide();
        stepFifthShow();
    }
    function BackuptoFourthStep(){
        stepFourthShow();
        stepFifthShow();
    }

    function MovetoOneMoreLast(){
        stepFifthHide();
        stepSixthShow();
    }
    function ShowDashboardComponent(){
        stepSixthHide();
        readyShowDashboard();
    }
    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');
    const [selected, setSelected] = useState('today');

    const handleSelectChange = useCallback((value) => setSelected(value), []);


    const handleChange = useCallback((newValue) => setValue(newValue), []);
    const handleChange1 = useCallback((newValue) => setValue(newValue), []);

   
    const [Radiovalue, setRadioValue] = useState('disabled');

    const handleRadioChange = useCallback(
        (_checked, newValue) => setRadioValue(newValue),
        [],
    );
    const [checked, setChecked] = useState(false);
    const handleCheckedChange = useCallback((newChecked) => setChecked(newChecked), []);


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
    return (
        <div>

            {showDiv1 ?
            <Page   primaryAction={{content: 'Step 1/5', disabled: true}} >
            <div className="app-wrapper">
                <Heading element="h1">Optimize image ALT text, filename and size</Heading>
                <div>Increase your product image rankings in search engines by optimizing filename and adding ALT text to your
                    product images.</div>
                <br /><br />
                <Layout>
                    <Layout.Section>
                        <Card title="Compression" sectioned>
                            <div className="row input-options">
                                <div className="col-xs-12 col-sm-12 col-lg-4">
                                    <div className="form-group text-left"><label for="image_alt">Image ALT text template</label>
                                        <TextField
                                            value={value}
                                            onChange={handleChange}
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-4">
                                    <div className="form-group text-left"><label for="filename">Image filename template</label>
                                        <TextField
                                            value={value1}
                                            onChange={handleChange1}
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                                <div className="template-variables text-left d-lg-none col-sm-12">
                                    <p>Template variables:</p> <input type="text" className="d-none" />
                                    <div className="template-variable">
                                        #product_name#
                                    </div>
                                    <div className="template-variable">
                                        #product_type#
                                    </div>
                                    <div className="template-variable">
                                        #product_vendor#
                                    </div>
                                    <div className="template-variable">
                                        #shop_name#
                                    </div>
                                    <div className="template-variable">
                                        #variant_sku#
                                    </div>
                                    <div className="template-variable">
                                        #variant_barcode#
                                    </div>
                                    <div className="template-variable">
                                        #option1#
                                    </div>
                                    <div className="template-variable">
                                        #option2#
                                    </div>
                                    <div className="template-variable">
                                        #option3#
                                    </div>
                                    <div className="template-variable">
                                        #original_value#
                                    </div>
                                    <div className="template-variable">
                                        Need more ? Contact support
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-lg-4">
                                    <div className="form-group text-left"><label for="resize_to">Resize oversized images to:</label>
                                        <Select

                                            options={options}
                                            onChange={handleSelectChange}
                                            value={selected}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                            <div className="template-variables text-left d-none d-lg-block d-xl-block">
                                <p>Template variables:</p> <input type="text" className="d-none" />
                                <div className="template-variable">
                                    #product_name#
                                </div>
                                <div className="template-variable">
                                    #product_type#
                                </div>
                                <div className="template-variable">
                                    #product_vendor#
                                </div>
                                <div className="template-variable">
                                    #shop_name#
                                </div>
                                <div className="template-variable">
                                    #variant_sku#
                                </div>
                                <div className="template-variable">
                                    #variant_barcode#
                                </div>
                                <div className="template-variable">
                                    #option1#
                                </div>
                                <div className="template-variable">
                                    #option2#
                                </div>
                                <div className="template-variable">
                                    #option3#
                                </div>
                                <div className="template-variable">
                                    #original_value#
                                </div>
                                <div className="template-variable">
                                    Need more ? Contact support
                                </div>
                            </div>
                        </Card>

                    </Layout.Section>
                </Layout>
                <br />
                <div className="next" >
                    <Button primary onClick={forwardStepTwo}>Next</Button>
   
            </div>
            </div>
            </Page>
            : null}
                {showDiv2 ? 
                <Page  primaryAction={{content: 'Step 2/5', disabled: true}}>
                         <div className="app-wrapper">
                <Heading element="h1">Online store dashboard</Heading>
                <div>Choose a default compression method for your images. Don't worry, you can always change it later. </div>
                <br /><br />
                <Layout>
                    <Layout.Section>
                        <Card title="Compression" sectioned>
                            <Stack vertical>
                                <RadioButton
                                    label="Lossy compression"
                                    helpText="Decreases image size with some quality loss. Typical compression: 5-70%."
                                    checked={Radiovalue === 'disabled'}
                                    id="disabled"
                                    name="accounts"
                                    onChange={handleRadioChange}
                                />
                                <RadioButton
                                    label="Lossless compression"
                                    helpText="Decreases image size with no quality loss. Typical compression: 5-30%."
                                    id="optional"
                                    name="accounts"
                                    checked={Radiovalue === 'optional'}
                                    onChange={handleRadioChange}
                                />
                            </Stack>
                            <hr />
                            <Checkbox
                                label="Basic checkbox"
                                helpText="JPEG images are ideal for Shopify stores because they provide the best quality with the smallest file size. The PNG format is only advisable for images with a transparent background. The Image Optimizer app can convert images from PNG to JPG and dramatically reduce the file size, up to 80% of the original size. Transparent PNGs will have a white background."
                                checked={checked}
                                onChange={handleCheckedChange}
                            />
                        </Card>

                    </Layout.Section>
                </Layout>
               
                <br />
                <Button onClick={BacktoOneStep}>Back</Button>
                <div className="next">
                <Button primary onClick={StepMovetoThirdStep}>Next</Button>
                   </div> 
            </div>
                </Page>
                
                : null}
                {
                    showDiv3?
                    <Page  primaryAction={{content: 'Step 3/5', disabled: true}} >
                        <div className="app-wrapper">
                <Heading element="h1">Do you want to optimize your alt texts?</Heading>
                <div>Choose if you want to automatically optimize your alt texts. Don't worry, you can always change it later. </div>
                <br /><br />
                <Layout>
                    <Layout.Section>
                        <Card sectioned>
                            <Checkbox
                                label="Basic checkbox"
                                helpText="The Image Optimizer app can automatically set the alt text by using simple templates for images and, consequently, improve SEO and Google Image Search rankings."
                                checked={checked}
                                onChange={handleCheckedChange}
                            />
                        </Card>
                    </Layout.Section>
                </Layout>
                <br />
                <Button onClick={BacktoSecondStep}>Back</Button>
                <div className="next">
                <Button primary onClick={MovetoFourthStep}>Next</Button>
                </div>
                </div>
                    </Page>
                :null}
                {
                    showDiv4?
                    <Page primaryAction={{content:'step 4/5',disabled:true}}>
                        <div className="app-wrapper">
                        <Heading element="h1">Do you want to optimize your image filenames?</Heading>
                <div>Choose if you want to automatically optimize your image filenames.</div>
                <br /><br />
                <Layout>
                    <Layout.Section>
                        <Card sectioned>
                            <Checkbox
                                label="Optimize Filenames"
                                helpText="The Image Optimizer app can automatically rename image filenames by using simple templates and, as a result, help the website rank higher on search engines. Only characters, numbers, and dashes are allowed. All other characters will be replaced by dashes. The app will also add a series of numbers at the end of the file name. This is required in order to have a unique file name for each image."
                                checked={checked}
                                onChange={handleCheckedChange}
                            />
                        </Card>
                    </Layout.Section>
                </Layout>
                <br />
                <Button onClick={BackToThirdStep}>Back</Button>
                <div className="next">
                <Button primary onClick={MoveToLastStep}>Next</Button>
                </div>
                <br /><br />
                        </div>
                    </Page>
                    :null
                }
            {
                showDiv5?
                <Page primaryAction={{content: 'Step 6/5', disabled: true}}>
                    <div className="app-wrapper">
                        {/* <img src='/images/camera.png'  alt="Camera Optimize" className="centerImage"/> */}
                        <Image src='/camera.png' alt='Home Page' width={100} height={100} />
                <div className="head1">
                    <Heading element="h1" >Optimizing your images</Heading>
               </div>
                <div className="bodytext">We are currently optimizing your images. Please wait.</div>
                <br />
                <ProgressBar progress={100} color="primary" />
                <br /><br />
                <br />
             
                <div className="next">
                <Button primary onClick={MovetoOneMoreLast}>Next</Button>
                    </div>
                    </div>
                </Page>
        :null

        }
        {
            showDiv6?
            <Page>
                    <div className="app-wrapper">
                    <Layout>
                        <Layout.Section>
                            <Card sectioned>
                                <p>We have successfully optimized 50 images and saved you 14.4 KB of space.</p>
                                <br />
                                <p>If you have a paid subscription, Image Optimizer will periodically look for and optimize the following types of new images:</p>
                                <br />
                                <List type="bullet">
                                    <List.Item>Product images</List.Item>
                                    <List.Item>Collection images</List.Item>
                                    <List.Item>Asset images</List.Item>
                                </List>
                                <br/>
                                <Banner
  title="UPload Manual Fikes"
  action={{content: 'Update rates', url: ''}}
  status="info"
  onDismiss={() => {}}
>
  <p>Make sure you know how these changes affect your store.</p>
</Banner>
                            </Card>
                        </Layout.Section>
                    </Layout>
                <br/>
                <div className="next">
                <Button primary onClick={ShowDashboardComponent}>Move to Dashboard</Button>
                    </div>
                    </div>
            </Page>
            :null
        }
        {
            showDashboard?
            <Dashboard/>
            :null
        }
            </div>
  
    );
}
const Text = () => <div>You clicked the button!</div>;
export default ImageOptimize;
