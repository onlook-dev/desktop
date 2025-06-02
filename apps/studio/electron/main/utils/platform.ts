import fs from 'fs';
import os from 'os';
import { execSync } from 'child_process';
import { ShellType } from '@onlook/models/constants';

/**
 * Detects if the current environment is Windows Subsystem for Linux (WSL)
 * @returns true if running in WSL, false otherwise
 */
export function isWSL(): boolean {
    try {
        // Check for WSL-specific environment variables
        if (process.env.WSL_DISTRO_NAME || process.env.WSLENV) {
            return true;
        }

        // Check for WSL in /proc/version (available in WSL)
        if (os.platform() === 'linux') {
            try {
                const procVersion = fs.readFileSync('/proc/version', 'utf8');
                return (
                    procVersion.toLowerCase().includes('microsoft') ||
                    procVersion.toLowerCase().includes('wsl')
                );
            } catch {
                // If we can't read /proc/version, fall back to other checks
            }
        }

        // Check for WSL in /proc/sys/kernel/osrelease (WSL 2)
        if (os.platform() === 'linux') {
            try {
                const osRelease = fs.readFileSync('/proc/sys/kernel/osrelease', 'utf8');
                return (
                    osRelease.toLowerCase().includes('microsoft') ||
                    osRelease.toLowerCase().includes('wsl')
                );
            } catch {
                // If we can't read the file, it's likely not WSL
            }
        }

        return false;
    } catch (error) {
        console.warn('Error detecting WSL environment:', error);
        return false;
    }
}

/**
 * Detects the user's default shell from environment variables and system configuration
 * @returns the path to the user's default shell
 */
export function detectUserShell(): string {
    try {
        // First, try the SHELL environment variable (most reliable)
        if (process.env.SHELL) {
            return process.env.SHELL;
        }

        // On Unix-like systems, try to get the shell from /etc/passwd
        if (os.platform() !== 'win32') {
            try {
                const username = os.userInfo().username;
                const passwdEntry = execSync(`getent passwd ${username}`, {
                    encoding: 'utf8',
                }).trim();
                const fields = passwdEntry.split(':');
                if (fields.length >= 7 && fields[6]) {
                    return fields[6];
                }
            } catch (error) {
                console.warn(
                    'Could not read user shell from passwd:',
                    error instanceof Error ? error.message : String(error),
                );
            }
        }

        // Fallback to common shells based on platform
        if (os.platform() === 'win32') {
            return 'powershell.exe';
        } else {
            return '/bin/bash'; // Most common fallback
        }
    } catch (error) {
        console.warn('Error detecting user shell:', error);
        // Ultimate fallback
        return os.platform() === 'win32' ? 'powershell.exe' : '/bin/bash';
    }
}

/**
 * Determines the appropriate shell to use based on the platform and environment
 * @param userPreference Optional user preference for shell type
 * @returns the shell command to use
 */
export function getShellCommand(userPreference?: ShellType): string {
    // If user has specified a preference, use it (except for auto-detect)
    if (userPreference && userPreference !== ShellType.AUTO_DETECT) {
        return getShellCommandForType(userPreference);
    }

    // Auto-detect logic: use the user's actual default shell
    return detectUserShell();
}

/**
 * Gets the shell command for a specific shell type
 * @param shellType The shell type to get the command for
 * @returns the shell command
 */
export function getShellCommandForType(shellType: ShellType): string {
    switch (shellType) {
        case ShellType.POWERSHELL:
            return 'powershell.exe';
        case ShellType.BASH:
            return '/bin/bash';
        case ShellType.FISH:
            return '/usr/bin/fish';
        case ShellType.ZSH:
            return '/bin/zsh';
        case ShellType.SYSTEM_SHELL:
            return '/bin/sh';
        case ShellType.AUTO_DETECT:
        default:
            // Fall back to auto-detection
            return getShellCommand();
    }
}

/**
 * Determines if we're running on a Windows-like environment (including WSL)
 * This is useful for path handling and other Windows-specific logic
 * @returns true if running on Windows or WSL, false otherwise
 */
export function isWindowsLike(): boolean {
    return os.platform() === 'win32' || isWSL();
}

/**
 * Gets platform-specific line ending
 * @returns '\r\n' for Windows, '\n' for Unix-like systems
 */
export function getLineEnding(): string {
    // Use Windows line endings only for native Windows, not WSL
    return os.platform() === 'win32' && !isWSL() ? '\r\n' : '\n';
}
