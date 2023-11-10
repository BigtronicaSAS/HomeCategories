const driverStep = () => {
    const driver = window.driver.js.driver;
    const driverObj = driver({
        showProgress: true,
        nextBtnText: 'Siguiente',
        prevBtnText: 'Atrás',
        doneBtnText: 'Salir',
        steps: [
            {
                element: ".sectionHome",
                popover: {
                    title: "Descubre las últimas mejoras",
                    description:
                        "Explora nuestras mejoras y haz que tu experiencia sea aún más satisfactoria",
                    side: "left",
                    align: "start",
                },
            },
            {
                element: ".sliderContainer .galeria-category",
                popover: {
                    title: "Nuestras Categorias",
                    description:
                        "Adéntrate en esta sección y descubre nuestras categorías más apreciadas",
                    side: "bottom",
                    align: "start",
                },
            },
            {
                element:
                    ".sliderContainer .galeria-category .articleCategory .sectionCategory:nth-child(1)",
                popover: {
                    title: "Elige la categoria",
                    description:
                        "Simplemente haz clic en la categoría que deseas explorar",
                    side: "bottom",
                    align: "start",
                },
            },
            {
                element: ".sectionHotter",
                popover: {
                    title: "Regala en Navidad",
                    description:
                        "Creamos esta sección para que encuentres tu regalo ideal y te enamores",
                    side: "left",
                    align: "start",
                },
            },
            {
                popover: {
                    title: "¡Cuéntanos si te gustó!",
                    description:
                        "<a href='https://api.whatsapp.com/send/?phone=573504523488&text&type=phone_number&app_absent=0'><img src='https://i.imgur.com/cDH5YxZ.jpeg' style='height: 270px; width: 270px;' /></a><span style='font-size: 15px; display: block; margin-top: 10px; text-align: center;'>Conversa con nosotros y comparte tu opinión.</span>",
                },
            },
        ],
    });

    driverObj.drive();
};
