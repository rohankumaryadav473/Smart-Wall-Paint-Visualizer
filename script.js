const imageInput =
    document.getElementById("imageInput");

const heroUploadBtn =
    document.getElementById("heroUploadBtn");

const chooseImageBtn =
    document.getElementById("chooseImageBtn");

const uploadBtn =
    document.getElementById("uploadBtn");

const canvas =
    document.getElementById("canvas");

const ctx =
    canvas.getContext("2d");

const emptyState =
    document.getElementById("emptyState");

const imageStatus =
    document.getElementById("imageStatus");

const colorPicker =
    document.getElementById("colorPicker");

const colorValue =
    document.getElementById("colorValue");

const opacitySlider =
    document.getElementById("opacitySlider");

const opacityValue =
    document.getElementById("opacityValue");

const applyBtn =
    document.getElementById("applyBtn");

const resetBtn =
    document.getElementById("resetBtn");

const downloadBtn =
    document.getElementById("downloadBtn");


let originalImage = null;

let selectedColor = "#3498db";

let paintOpacity = 0.45;


// ========================================
// IMAGE SELECTION
// ========================================

heroUploadBtn.addEventListener(
    "click",
    () => {

        imageInput.click();

    }
);


chooseImageBtn.addEventListener(
    "click",
    () => {

        imageInput.click();

    }
);


// ========================================
// IMAGE UPLOAD
// ========================================

imageInput.addEventListener(
    "change",
    () => {

        const file =
            imageInput.files[0];

        if (!file) {
            return;
        }


        if (!file.type.startsWith("image/")) {

            alert(
                "Please select a valid image."
            );

            return;
        }


        const reader =
            new FileReader();


        reader.onload =
            function(event) {

                const image =
                    new Image();


                image.onload =
                    function() {

                        originalImage =
                            image;


                        canvas.width =
                            image.width;

                        canvas.height =
                            image.height;


                        ctx.drawImage(
                            image,
                            0,
                            0,
                            canvas.width,
                            canvas.height
                        );


                        // Show canvas

                        canvas.style.display =
                            "block";


                        emptyState.style.display =
                            "none";


                        imageStatus.textContent =
                            file.name;

                    };


                image.src =
                    event.target.result;

            };


        reader.readAsDataURL(file);

    }
);


// ========================================
// COLOR PICKER
// ========================================

colorPicker.addEventListener(
    "input",
    () => {

        selectedColor =
            colorPicker.value;

        colorValue.textContent =
            selectedColor.toUpperCase();

    }
);


// ========================================
// PRESET COLORS
// ========================================

const colorButtons =
    document.querySelectorAll(
        ".color-btn"
    );


colorButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                selectedColor =
                    button.dataset.color;


                colorPicker.value =
                    selectedColor;


                colorValue.textContent =
                    selectedColor.toUpperCase();

            }
        );

    }
);


// ========================================
// OPACITY
// ========================================

opacitySlider.addEventListener(
    "input",
    () => {

        const value =
            opacitySlider.value;


        paintOpacity =
            value / 100;


        opacityValue.textContent =
            value + "%";

    }
);


// ========================================
// APPLY PAINT
// ========================================

applyBtn.addEventListener(
    "click",
    () => {

        if (!originalImage) {

            alert(
                "Please upload a room image first."
            );

            return;
        }


        // Draw original image

        ctx.globalAlpha = 1;

        ctx.drawImage(
            originalImage,
            0,
            0,
            canvas.width,
            canvas.height
        );


        // Apply selected color

        ctx.globalAlpha =
            paintOpacity;


        ctx.fillStyle =
            selectedColor;


        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        ctx.globalAlpha = 1;

    }
);


// ========================================
// RESET
// ========================================

resetBtn.addEventListener(
    "click",
    () => {

        if (!originalImage) {

            alert(
                "Please upload an image first."
            );

            return;
        }


        ctx.globalAlpha = 1;


        ctx.drawImage(
            originalImage,
            0,
            0,
            canvas.width,
            canvas.height
        );

    }
);


// ========================================
// DOWNLOAD
// ========================================

downloadBtn.addEventListener(
    "click",
    () => {

        if (!originalImage) {

            alert(
                "Please upload an image first."
            );

            return;
        }


        const link =
            document.createElement("a");


        link.download =
            "smart-wall-paint-result.png";


        link.href =
            canvas.toDataURL(
                "image/png"
            );


        link.click();

    }
);