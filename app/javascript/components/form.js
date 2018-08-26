import $ from 'jquery';
import * as Dropzone from "dropzone";


function initDropZone() {

    Dropzone.autoDiscover = false;

    var myDropzone = new Dropzone("#new_cocktail", {
        url: $('#new_cocktail').action,
        maxFilesize: 3,
        maxFiles: 1,
        dictDefaultMessage: "You can drop your cocktail image here",
        paramName: "cocktail[picture_url]",
        addRemoveLinks: true, // Don't show remove links on dropzone itself.
        autoProcessQueue: false,
        dictRemoveFile: "Remove cocktail image",
        sendingmultiple: function(data, xhr, formData) {
            formData.append("name", $("#cocktail_name").val());
        }
    });

    myDropzone.on("success", function(file, serverResponse) {
        /* Maybe display some more file information on your page */
        eval(serverResponse);
    });

    $('#new_cocktail').submit(function(e) {
        e.preventDefault();
        e.stopPropagation();
        myDropzone.processQueue();
    });

    console.log("dropzone initialized");
}

export { initDropZone };