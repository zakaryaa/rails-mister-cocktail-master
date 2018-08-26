import swal from 'sweetalert';

function sweetButton() {
    const deleteButtons = document.querySelectorAll('.cocktail-erase');

    deleteButtons.forEach((icon) => {
        icon.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            const name = icon.dataset.cocktailname;
            const id = icon.dataset.cocktailid;

            swal({
                title: "Are you sure you want to delete the cocktail : " + name + " ?",
                text: "Once deleted, you will not be able to recover it !",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    swal("The cocktail " + name + " file has been deleted!", {
                        icon: "success",
                    }).then(() => {
                        document.getElementById(id).click();
                    });
                } else {
                    swal("Your cocktail file is safe!");
                }
            });
        });
    });
    console.log("sweetButton initialized");

}

export { sweetButton };