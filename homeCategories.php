<?php
if (!defined('_PS_VERSION_'))
    exit;

class HomeCategories extends Module
{

    public function __construct()
    {

        $this->name = 'homeCategories';
        $this->tab = 'front_office_feautures';
        $this->version = '1.0';
        $this->author = 'juanalvarez';
        $this->need_instance = 0;
        $this->bootstrap = true;
        parent::__construct();
        $this->displayName = $this->l('Categorias Especiales');
        $this->description = $this->l('categorias especiales de la tienda');
        $this->ps_versions_compliancy = array('min' => '1.6', 'max' => '1.6.99.99');

    }

    public function install()
    {
        $this->_clearCache('*');
        if (
            !parent::install()

            || !$this->registerHook('header')
            || !$this->registerHook('displayTopColumn')


        )
            return false;

        return true;
    }

    public function uninstall()
    {
        $this->_clearCache('*');
        return parent::uninstall();
    }



    public function hookDisplayHeader($params)
    {
        $this->hookHeader($params);
    }

    public function hookHeader($params)
    {
        $this->context->controller->addCSS('https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css');
        $this->context->controller->addJS('https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js');
        $this->context->controller->addCSS('https://cdn.jsdelivr.net/npm/driver.js@1.0.1/dist/driver.css');
        $this->context->controller->addJS('https://cdn.jsdelivr.net/npm/driver.js@1.0.1/dist/driver.js.iife.js');
        $this->context->controller->addJS($this->_path . 'public/js/driver.js');
        $this->context->controller->addJS($this->_path . 'public/js/SliderSettings.js');
        $this->context->controller->addCSS(($this->_path) . 'public/css/homeCategories.css', 'all');
        $this->context->controller->addJS($this->_path . 'public/js/homeCategories.js');

    }


    public function hookdisplayTopColumn($params)
    {

        return $this->display(__FILE__, 'views/template/hook/homeCategories.tpl');

    }


}