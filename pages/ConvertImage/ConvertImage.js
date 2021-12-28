import React, {useCallback, useState} from 'react';
import {TextField,Button,Heading,Select,RadioButton, Stack} from '@shopify/polaris';
//import './ConvertImage.css';
export default function ConvertImage() {
  const [value, setValue] = useState('1');

  const [Heightvalue, setHeightValue] = useState('1');
  const [Qualityvalue, setQuantityValue] = useState('1');

  const handleChange = useCallback((newValue) => setValue(newValue), []);
  const handleQuanlityChange = useCallback((newValue) => setValue(newValue), []);
  
  const handleChangeHeight = useCallback((newValue) => setValue(newValue), []);
  const [selected, setSelected] = useState('Max');

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const [Radiovalue, setRadioValue] = useState('disabled');

  const handleRadioChange = useCallback(
    (_checked, newValue) => setValue(newValue),
    [],
  );
  const options = [
    {label: 'Max', value: 'Max'},
    {label: 'crop', value: 'crop'},
    {label: 'scale', value: 'scale'},
  ];

  return (
    <div>
    <div>
        <div className="d-flex mb-2 justify-content-center">
            <div className="btn-group dropdown mt-4">
                <Button primary type="button" className="btn btn-primary btn-lg selectFile">
                    <i className="fa fa-file-plus mr-1" aria-hidden="true"></i>
                    Select File
                </Button>
                {/* <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                    className="btn dropdown-toggle dropdown-toggle-split btn-primary btn-lg selectToggle">
                    <span className="sr-only">Toggle
                        Dropdown</span></button>
                <div className="dropdown-menu dropdown-menu-right">
                    <a href="" className="dropdown-item"><i
                        className="fa fa-folder-open fa-fw mr-1" aria-hidden="true"></i>From my Computer
                    </a>
                    <span><a href="" className="dropdown-item"><i className="fa fa-link fa-fw mr-1" aria-hidden="true"></i>By
                        URL
                    </a>

                    </span>
                    <a href="" className="dropdown-item"><i className="fab fa-google-drive fa-fw mr-1"
                        aria-hidden="true"></i>From Google Drive
                    </a>
                    <a href="" className="dropdown-item"><i className="fab fa-dropbox fa-fw mr-1" aria-hidden="true"></i>From
                        Dropbox
                    </a>
                    <a href="" className="dropdown-item"><i className="fab fa-microsoft fa-fw mr-1" aria-hidden="true"></i>From
                        OneDrive
                    </a>

                </div> */}
                <input type="file" multiple="multiple" className="d-none" />
            </div>
        </div>
    </div>
    <div className="card options mt-5" style={{ width: "97%", marginLeft: "28px" }}>
        <div className="card-header">
            <Heading element="h3" className="card-title"><i className="fa fa-wrench mr-1" aria-hidden="true"></i>
                Options
                <i title=" Setting these options is optional. The default values are a good start for most cases."
                    className="fa fa-question-circle float-right" aria-hidden="true"></i>
                  
            </Heading>
        </div>
        <div className="card-content">
            <form className="form-horizontal row-separator  d-flex flex-wrap w-100">
                <div className="form-group row w-50 w-sm-down-100 pl-1">
                    <label className="col-sm-4 col-form-label p-1 pt-2">

                    Width

                </label>
                    <div className="col-sm-8 p-1">
                    <TextField
      type="number"
      value={value}
      onChange={handleChange}
      autoComplete="off"
    /> 
    <small
                        className="form-text text-muted">Output width in pixels.</small></div>
                </div>
                <div className="form-group row w-50 w-sm-down-100 pl-1"><label className="col-sm-4 col-form-label p-1 pt-2">

                    Height

                </label>
                    <div className="col-sm-8 p-1">
                    <TextField
      type="number"
      value={Heightvalue}
      onChange={handleChangeHeight}
      autoComplete="off"
    />
                        <small
                        className="form-text text-muted">Output height in pixels.</small></div>
                </div>
                <div className="form-group row w-50 w-sm-down-100 pl-1"><label className="col-sm-4 col-form-label p-1 pt-2">

                    Fit

                </label>
                    <div className="col-sm-8 p-1">
                    <Select
      options={options}
      onChange={handleSelectChange}
      value={selected}
    />
                        <small className="form-text text-muted">Sets the mode of resizing the image. "Max" resizes the
                            image to fit within the width and height, but will not increase the size of the image if it is
                            smaller than width or height. "Crop" resizes the image to fill the width and height dimensions
                            and crops any excess image data. "Scale" enforces the image width and height by scaling.
                        </small>
                    </div>
                </div>
                <div className="form-group row w-50 w-sm-down-100 pl-1">
                    <label className="col-sm-4 col-form-label p-1 pt-2">

                        Strip

                    </label>
                    <div className="col-sm-8 p-1">
                        <div role="radiogroup" tabindex="-1" className="bv-no-focus-ring" id="__BVID__68">
                        <RadioButton
        label="Yes"
      
        checked={value === 'disabled'}
        id="disabled"
        name="accounts"
        onChange={handleRadioChange}
      />
      <RadioButton
        label="No"
  
        id="optional"
        name="accounts"
        checked={value === 'optional'}
        onChange={handleRadioChange}
      />
                        </div>
                        <small className="form-text text-muted">Remove any metadata such as EXIF data.
                        </small>
                    </div>
                </div>
                <div className="form-group row w-50 w-sm-down-100 pl-1"><label className="col-sm-4 col-form-label p-1 pt-2">

                    Quality

                </label>
                    <div className="col-sm-8 p-1">
                    <TextField
      type="number"
      value={Qualityvalue}
      onChange={handleQuanlityChange}
      autoComplete="off"
    /> 
                        <small
                            className="form-text text-muted">JPEG compression level from 1 (lowest image quality and highest
                            compression) to 100 (best quality but least effective compression). The default is to estimate
                            the quality based on your input image.
                        </small>
                    </div>
                </div>
                <div className="form-group row w-50 w-sm-down-100 pl-1">
                    <label className="col-sm-4 col-form-label p-1 pt-2">

                        Auto Orient

                    </label>
                    <div className="col-sm-8 p-1">
                        <div role="radiogroup" tabindex="-1" className="bv-no-focus-ring" id="__BVID__73">
                        <RadioButton
        label="Yes"
      
        checked={value === 'disabled'}
        id="disabled"
        name="accounts"
        onChange={handleRadioChange}
      />
      <RadioButton
        label="No"
  
        id="optional"
        name="accounts"
        checked={value === 'optional'}
        onChange={handleRadioChange}
      />
                        </div> <small className="form-text text-muted">Automatically rotate the image correctly, based on EXIF
                            information which usually is set using a gravity sensor in digital cameras.
                        </small>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <section id="content">
<div className="row">
<div className="col-md-6 col-sm-12 card1">
<div className="card h-100 mb-0">
    <div className="card-body"><a href="/png-converter" className="float-right">


            PNG Converter
        </a>
        <h4 className="card-title"><i className="fa fa-file mr-1" aria-hidden="true"></i>


            PNG


        </h4>
        <p>PNG or Portable Network Graphic format is a graphic file format that uses lossless compression
            algorithm to store raster images. It uses 2 stage compression methods. It is frequently used as
            web site images rather than printing as it supports only the RGB color model. So CMYK color
            images cannot be saved as PNG image.</p>
    </div>
</div>
</div>
<div className="col-md-6 col-sm-12 card1">
<div className="card h-100 mb-0">
    <div className="card-body"><a href="/jpg-converter" className="float-right">


            JPG Converter
        </a>
        <h4 className="card-title"><i className="fa fa-file mr-1" aria-hidden="true"></i>


            JPG


        </h4>
        <p>JPG, also known as JPEG, is a file format that can contain image with 10:1 to 20:1 lossy image
            compression technique. With the compression technique it can reduce the image size without
            losing the image quality. So it is widely used in web publishing to reduce the image size
            maintaining the image quality.</p>
    </div>
</div>
</div>
</div>
</section>
</div>
  );
}
