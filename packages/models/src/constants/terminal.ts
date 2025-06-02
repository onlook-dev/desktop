export const TerminalCommands = {
    CTRL_C: String.fromCharCode(3),
};

/**
 * Available shell types for terminal usage
 */
export enum ShellType {
    AUTO_DETECT = 'auto-detect',
    POWERSHELL = 'powershell',
    BASH = 'bash',
    FISH = 'fish',
    ZSH = 'zsh',
    SYSTEM_SHELL = 'system-shell',
}

/**
 * Display names for shell types in the UI
 */
export const SHELL_TYPE_DISPLAY_NAMES: Record<ShellType, string> = {
    [ShellType.AUTO_DETECT]: 'Auto-detect',
    [ShellType.POWERSHELL]: 'PowerShell',
    [ShellType.BASH]: 'Bash',
    [ShellType.FISH]: 'Fish',
    [ShellType.ZSH]: 'Zsh',
    [ShellType.SYSTEM_SHELL]: 'System Shell (/bin/sh)',
};
