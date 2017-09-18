import Utils from './utils';

const Mixins = {
  linkIconProps: {
    icon: String,
    iconMaterial: String,
    iconIon: String,
    iconFa: String,
    iconF7: String,
    iconIfMd: String,
    iconIfIos: String,
    iconSize: [String, Number],
  },
  linkRouterProps: {
    back: Boolean,
    external: Boolean,
    force: Boolean,
    reload: Boolean,
    animate: Boolean,
    ignoreCache: Boolean,
    reloadCurrent: Boolean,
    reloadAll: Boolean,
    reloadPrevious: Boolean,
    view: String,
  },
  linkRouterAttrs(self) {
    const {
      force,
      reloadCurrent,
      reloadPrevious,
      reloadAll,
      animate,
      ignoreCache,
      view,
    } = self;

    return {
      'data-force': force,
      'data-reload-current': reloadCurrent,
      'data-reload-all': reloadAll,
      'data-reload-previous': reloadPrevious,
      'data-animate': ('animate' in self.$options.propsData) ? animate.toString() : undefined,
      'data-ignore-cache': ignoreCache,
      'data-view': Utils.isStringProp(view) ? view : false,
    };
  },
  linkRouterClasses(self) {
    const { back, linkBack, external } = self;

    return {
      back: back || linkBack,
      external,
    };
  },
  linkActionsProps: {
    // Panel
    panelOpen: [Boolean, String],
    panelClose: [Boolean, String],

    // Popup
    popupOpen: [Boolean, String],
    popupClose: [Boolean, String],

    // Popover
    popoverOpen: [Boolean, String],
    popoverClose: [Boolean, String],

    // Login Screen
    loginScreenOpen: [Boolean, String],
    loginScreenClose: [Boolean, String],

    // Picker
    sheetOpen: [Boolean, String],
    sheetClose: [Boolean, String],

    // Sortable
    sortableEnable: [Boolean, String],
    sortableDisable: [Boolean, String],
    sortableToggle: [Boolean, String],
  },
  linkActionsAttrs(self) {
    const {
      panelOpen,
      panelClose,
      popupOpen,
      popupClose,
      popoverOpen,
      popoverClose,
      loginScreenOpen,
      loginScreenClose,
      sheetOpen,
      sheetClose,
      sortableEnable,
      sortableDisable,
      sortableToggle,
    } = self;

    return {
      'data-panel': Utils.isStringProp(panelOpen) || Utils.isStringProp(panelClose),
      'data-popup': Utils.isStringProp(popupOpen) || Utils.isStringProp(popupClose),
      'data-popover': Utils.isStringProp(popoverOpen) || Utils.isStringProp(popoverClose),
      'data-sheet': Utils.isStringProp(sheetOpen) || Utils.isStringProp(sheetClose),
      'data-login-screen': Utils.isStringProp(loginScreenOpen) || Utils.isStringProp(loginScreenClose),
      'data-sortable': Utils.isStringProp(sortableEnable) || Utils.isStringProp(sortableDisable) || Utils.isStringProp(sortableToggle),
    };
  },
  linkActionsClasses(self) {
    const {
      panelOpen,
      panelClose,
      popupOpen,
      popupClose,
      popoverOpen,
      popoverClose,
      loginScreenOpen,
      loginScreenClose,
      sheetOpen,
      sheetClose,
      sortableEnable,
      sortableDisable,
      sortableToggle,
    } = self;
    return {
      'panel-close': Utils.isTrueProp(panelClose),
      'panel-open': panelOpen || panelOpen === '',
      'popup-close': Utils.isTrueProp(popupClose),
      'popup-open': popupOpen || popupOpen === '',
      'popover-close': Utils.isTrueProp(popoverClose),
      'popover-open': popoverOpen || popoverOpen === '',
      'sheet-close': Utils.isTrueProp(sheetClose),
      'sheet-open': sheetOpen || sheetOpen === '',
      'login-screen-close': Utils.isTrueProp(loginScreenClose),
      'login-screen-open': loginScreenOpen || loginScreenOpen === '',
      'sortable-enable': Utils.isTrueProp(sortableEnable),
      'sortable-disable': Utils.isTrueProp(sortableDisable),
      'sortable-toggle': Utils.isTrueProp(sortableToggle),
    };
  },
};
export default Mixins;