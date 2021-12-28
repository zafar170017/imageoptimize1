
//import './faq.css';

import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useCallback, useState } from 'react';
import { Caption, DropZone,Thumbnail,ButtonGroup, TextContainer, TextField, Button, Heading, Select, RadioButton, Stack, Card, Layout, Checkbox, ProgressBar, TextStyle, DisplayText, List, Banner, Page, Badge } from '@shopify/polaris';

export default function faq(){
    return(
        <Page
        breadcrumbs={[{ content: 'Products', url: '/products' }]}
        title="Manual File Uploader"
        titleMetadata={<Badge status="attention">Verified</Badge>}
        primaryAction={{ content: 'Save', disabled: true }}
        secondaryActions={[{ content: 'Duplicate' }, { content: 'View on your store' }]}
        pagination={{
            hasPrevious: true,
            hasNext: true,
        }}> 
         <Layout>
  <Layout.Section>
    <Card title="" sectioned>
        <br/>
        <Heading element="h1">Frequently Asked Questions</Heading>
        <br/>
            <div className="row">
        <div className="col-md-4">
        <Heading element="h1">What do I need to do when I upload new images?</Heading>
        <br/>
        <p>If you have a paid subscription, Image Optimizer will periodically look for new product, collection, asset, and blog post featured images and compress them automatically so you'll never have to worry about slow images and can focus on building your store.</p>
            </div>
            <div className="col-md-4">
            <Heading element="h1">How do I optimize images stored in Settings  Files?</Heading>
            <br/>
            <p>mage Optimizer can compress product, collection, asset, and blog post featured images but cannot optimize the images you have in Settings  Files (homepage slides/banners, blog images, etc.). Learn more how to optimize</p>
            </div>
            <div className="col-md-4">
            <Heading element="h1">Have more questions?</Heading>
            <br/>
            <p>Please visit our Help Center or feel free to send an email. We are here to help you and happy to answer any questions!</p>
            </div>
            </div>
    </Card>
  </Layout.Section>
</Layout>
     </Page>
    );
}