export interface Theme{
  title: string;
  theme: {
    bgNav: string;
    bgNavTop: string;
    bgTitle: string;
    bgTitleUI: string
    bgContent: string;
    bgNotesMenu: string;
    fgNav: string;
    fgTitle: string;
    fgContent: string;
    fgNotesMenu: string;
    boxShadow: string;
  }
}

const Themes = {
  dark: {
    title: 'dark',
    theme: {
      bgNav: '#0e162f',
      bgNavTop: '#081028',
      bgTitle: '#131b35',
      bgTitleUI: '#0e162f',
      bgContent: '#131b35',
      bgNotesMenu: '#131b35',
      fgNav: '#ffffff',
      fgTitle: '#ffffff',
      fgContent: '#ffffff',
      fgNotesMenu: '#ffffff',
      boxShadow: '#0006'
    }
  } as Theme,
  light: {
    title: 'light',
    theme: {
      bgNav: '#0e162f',
      bgNavTop: '#081028',
      bgTitle: '#131b35',
      bgTitleUI: '#0e162f',
      bgContent: '#131b35',
      bgNotesMenu: '#131b35',
      fgNav: '#ffffff',
      fgTitle: '#ffffff',
      fgContent: '#ffffff',
      fgNotesMenu: '#ffffff',
      boxShadow: '#0006'
    }
  } as Theme,
  black: {
    title: 'black',
    theme: {
      bgNav: '#0e162f',
      bgNavTop: '#081028',
      bgTitle: '#131b35',
      bgTitleUI: '#0e162f',
      bgContent: '#131b35',
      bgNotesMenu: '#131b35',
      fgNav: '#ffffff',
      fgTitle: '#ffffff',
      fgContent: '#ffffff',
      fgNotesMenu: '#ffffff',
      boxShadow: '#0006'
    }
  } as Theme
}

const setTheme = (t: Theme) => {
  const theme = t.theme;

  document.documentElement.style.setProperty('--bg-nav', theme.bgNav);
  document.documentElement.style.setProperty('--bg-nav-top', theme.bgNavTop);
  document.documentElement.style.setProperty('--bg-title', theme.bgTitle);
  document.documentElement.style.setProperty('--bg-title-ui', theme.bgTitleUI);
  document.documentElement.style.setProperty('--bg-content', theme.bgContent);
  document.documentElement.style.setProperty('--bg-notes-menu', theme.bgNotesMenu);

  document.documentElement.style.setProperty('--fg-nav', theme.fgNav);
  document.documentElement.style.setProperty('--fg-title', theme.fgTitle);
  document.documentElement.style.setProperty('--fg-content', theme.fgContent);
  document.documentElement.style.setProperty('--fg-notes-menu', theme.fgNotesMenu);

  document.documentElement.style.setProperty('--box-shadow', theme.boxShadow);
}

export {Themes, setTheme};