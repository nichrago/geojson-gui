import { createTheme } from "@mui/material";
import { tokens } from "./tokens";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          color: tokens.colors.accent,
          border: `1px solid ${tokens.colors["accent-subtle"]}`,
          "&:hover": {
            border: `1px solid ${tokens.colors.accent}`,
            background: tokens.colors["focus-subtle"],
          },
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          background: tokens.colors.background,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: tokens.sizings[4],
          "& div": {
            display: "flex",
          },
          "& div > svg": {
            marginRight: tokens.sizings[1],
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: `0 ${tokens.sizings[1]} 0 0`,
          "&.Mui-checked": {
            color: tokens.colors.accent,
          },
          "&:hover": {
            color: tokens.colors.accent,
          },
          "&:focus-visible": {
            color: tokens.colors.focus,
          },
          "&.Mui-focusVisible": {
            color: tokens.colors.focus,
          },
          "&:focus-visible > svg": {
            outline: `2px solid ${tokens.colors.focus}`,
            borderRadius: tokens.sizings[1],
          },
          "&.Mui-focusVisible > svg": {
            outline: `2px solid ${tokens.colors.focus}`,
            borderRadius: tokens.sizings[1],
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: `${tokens.sizings[2]} 0`,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: "14px",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        item: {
          "&.solution-panel": {
            borderRight: `1px solid ${tokens.colors.secondary}`,
          },
          "&.statistics-panel": {
            padding: tokens.sizings[4],
            borderLeft: `1px solid ${tokens.colors.secondary}`,
          },
          "&.map": {
            minHeight: 500,
            position: "relative",
            "& .MuiButtonGroup-root": {
              position: "absolute",
              zIndex: 999,
              left: tokens.sizings[5],
              top: tokens.sizings[5],
            },
            // opportunity for cool effects
            // "& .map-tiles": {
            //   filter: `blur(2px)`
            // }
          },
        },
        container: {
          height: "calc(100vh - 70px)",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: tokens.sizings[1],
          borderBottom: `1px solid ${tokens.colors.secondary}`,
          "&.Mui-selected": {
            backgroundColor: tokens.colors.focus,
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "& button > svg": {
            fontSize: tokens.sizings[4],
          },
          "&:hover": {
            backgroundColor: tokens.colors["accent-slight"],
          },
          "&:active": {
            backgroundColor: tokens.colors["accent-subtle"],
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          "& span.MuiTypography-root": {
            fontSize: "14px",
          },
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          fontSize: tokens.sizings[4],
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: `1px solid ${tokens.colors.secondary}`,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: tokens.sizings[3],
          "& svg": {
            paddingRight: tokens.sizings[1],
            fontSize: tokens.sizings[4],
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          "&.nav": {
            height: 60,
            background: tokens.colors.background,
            paddingLeft: tokens.sizings[4],
            borderBottom: `1px solid ${tokens.colors.secondary}`,
            display: "flex",
            alignItems: "center",
            "& svg": {
              marginRight: tokens.sizings[1],
            },
            "& .MuiTypography-root": {
              fontWeight: 700,
              fontSize: tokens.sizings[5],
            },
          },
        },
      },
    },
    MuiTypography: {
      fontFamily: tokens.fontFamilies.default,
      body2: {
        fontSize: "14px",
      },
    },
  },
  typography: {
    fontFamily: tokens.fontFamilies.default,
  },
});

export default theme;
