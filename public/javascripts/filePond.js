// The querySelector() method returns an element in the document that matches the specified CSS selector.
var inputElement = document.querySelector('input[type="file"]');

// Register Plugin
// FilePondPluginImagePreview can preview the uploaded pictures, etc. when uploading
// FilePondPluginImageEdit will not be shown because of doka charges.
// FilePondPluginFileValidateType Picture Type
// FilePondPluginImageCrop Image Clipping
// FilePondPluginFileValidateSize File Size Verification Plugin handles files that are too large.
FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageEdit,
    FilePondPluginFileValidateSize,
    FilePondPluginImageCrop,
    FilePondPluginFileValidateType,
    FilePondPluginImageExifOrientation
);

FilePond.setOptions({
    // Setting a single URL is the most basic form of defining a server configuration.
    server: "/uploadAvatar",
    // Set the picture type to png only to upload
    allowFileTypeValidation: false,
    acceptedFileTypes: "image/jpg",
    // Enable or disable image clipping
    allowImageCrop: true,

    // Enable or disable file size verification
    allowFileSizeValidation: true,
    maxFileSize: null,

    // Enable or disable extracting EXIF information
    allowImageExifOrientation: true,
});

// Use the create method to incrementally enhance the base file input to the FilePond element.
FilePond.create(inputElement);
