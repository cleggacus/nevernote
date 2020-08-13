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
    borderWidth: string;
    borderColor: string;
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
      boxShadow: '#0005',
      borderWidth: '0px',
      borderColor: '#0a0a0a'
    }
  } as Theme,
  light: {
    title: 'light',
    theme: {
      bgNav: '#ffffff',
      bgNavTop: '#ffffff',
      bgTitle: '#ffffff',
      bgTitleUI: '#f4f5fc',
      bgContent: '#ffffff',
      bgNotesMenu: '#ffffff',
      fgNav: '#131b35',
      fgTitle: '#131b35',
      fgContent: '#131b35',
      fgNotesMenu: '#131b35',
      boxShadow: '#0005',
      borderWidth: '0px',
      borderColor: '#ffffff'
    }
  } as Theme,
  black: {
    title: 'black',
    theme: {
      bgNav: '#000000',
      bgNavTop: '#000000',
      bgTitle: '#000000',
      bgTitleUI: '#111111',
      bgContent: '#000000',
      bgNotesMenu: '#000000',
      fgNav: '#ffffff',
      fgTitle: '#ffffff',
      fgContent: '#ffffff',
      fgNotesMenu: '#ffffff',
      boxShadow: '#00000000',
      borderWidth: '1px',
      borderColor: '#0a0a0a'
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
  document.documentElement.style.setProperty('--border-width', theme.borderWidth);
  document.documentElement.style.setProperty('--border-color', theme.borderColor);
}

export {Themes, setTheme};