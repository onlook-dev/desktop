import {
    AlignBottomIcon,
    AlignCenterHorizontallyIcon,
    AlignCenterVerticallyIcon,
    AlignLeftIcon,
    AlignRightIcon,
    AlignTopIcon,
    ArrowDownIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    BookmarkFilledIcon,
    BookmarkIcon,
    BorderAllIcon,
    BorderBottomIcon,
    BorderDashedIcon,
    BorderDottedIcon,
    BorderLeftIcon,
    BorderRightIcon,
    BorderSolidIcon,
    BorderTopIcon,
    BoxIcon,
    ButtonIcon,
    ChatBubbleIcon,
    CheckCircledIcon,
    CheckIcon,
    CheckboxIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    CircleBackslashIcon,
    CircleIcon,
    ClipboardCopyIcon,
    ClipboardIcon,
    CodeIcon,
    ComponentInstanceIcon,
    CopyIcon,
    CornerBottomLeftIcon,
    CornerBottomRightIcon,
    CornerTopLeftIcon,
    CornerTopRightIcon,
    CornersIcon,
    CounterClockwiseClockIcon,
    Cross1Icon,
    Cross2Icon,
    CrossCircledIcon,
    CubeIcon,
    CursorArrowIcon,
    DesktopIcon,
    DiscordLogoIcon,
    DotsHorizontalIcon,
    DotsVerticalIcon,
    DownloadIcon,
    DragHandleDots2Icon,
    DropdownMenuIcon,
    EnvelopeClosedIcon,
    ExclamationTriangleIcon,
    ExitIcon,
    ExternalLinkIcon,
    EyeClosedIcon,
    EyeOpenIcon,
    FileIcon,
    FilePlusIcon,
    FrameIcon,
    GearIcon,
    GitHubLogoIcon,
    GlobeIcon,
    GroupIcon,
    HandIcon,
    ImageIcon,
    InfoCircledIcon,
    InputIcon,
    KeyboardIcon,
    LaptopIcon,
    Link2Icon,
    LinkNone1Icon,
    ListBulletIcon,
    LockClosedIcon,
    LockOpen1Icon,
    MagicWandIcon,
    MagnifyingGlassIcon,
    MinusCircledIcon,
    MinusIcon,
    MixerHorizontalIcon,
    MixerVerticalIcon,
    MobileIcon,
    MoonIcon,
    Pencil1Icon,
    Pencil2Icon,
    PersonIcon,
    PilcrowIcon,
    PinLeftIcon,
    PinRightIcon,
    PlusCircledIcon,
    PlusIcon,
    QuestionMarkCircledIcon,
    ReloadIcon,
    ResetIcon,
    RowSpacingIcon,
    ScissorsIcon,
    SectionIcon,
    ShadowIcon,
    Share2Icon,
    SizeIcon,
    SketchLogoIcon,
    SpaceBetweenHorizontallyIcon,
    SpaceBetweenVerticallyIcon,
    SquareIcon,
    SunIcon,
    TextAlignCenterIcon,
    TextAlignLeftIcon,
    TextAlignRightIcon,
    TextIcon,
    TokensIcon,
    TrashIcon,
    UploadIcon,
    VideoIcon,
    ViewGridIcon,
    ViewHorizontalIcon,
    ViewVerticalIcon,
} from '@radix-ui/react-icons';
import { cn } from '../../utils';
import H1Icon from './header-level-icons/h1Icon';
import H2Icon from './header-level-icons/h2Icon';
import H3Icon from './header-level-icons/h3Icon';
import H4Icon from './header-level-icons/h4Icon';
import H5Icon from './header-level-icons/h5Icon';
import H6Icon from './header-level-icons/h6Icon';

export interface IconProps {
    className?: string;
    [key: string]: any;
}

export const Icons = {
    OnlookLogo: ({ className, ...props }: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={22}
            fill="none"
            className={className}
            {...props}
        >
            <g clipPath="url(#clip0_2707_69355)">
                <mask
                    id="mask0_2707_69355"
                    style={{ maskType: 'alpha' }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="23"
                    height="22"
                >
                    <circle
                        cx="11.0078"
                        cy="11"
                        r="11"
                        fill="black"
                        style={{ fill: 'black', fillOpacity: 1 }}
                    />
                </mask>
                <g mask="url(#mask0_2707_69355)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.737 20.3969C19.9024 18.4654 22.0156 14.9795 22.0156 11C22.0156 4.92487 17.0908 0 11.0156 0C4.94049 0 0.015625 4.92487 0.015625 11C0.015625 13.6014 0.918657 15.9919 2.42835 17.8751L6.43945 14.6732V10.2135V8.20775L3.9857 5.75391H6.43945H15.6693C16.5441 5.75391 17.2533 6.46309 17.2533 7.33791V10.1708C16.4269 9.5987 15.8319 9.13852 15.8319 9.13852L13.0395 10.8308L17.8203 14.8924L16.737 20.3969ZM11.3203 6.98584H14.6616C14.6616 6.98584 14.7871 8.37687 12.9594 8.37687C11.3203 6.98574 11.3203 6.98584 11.3203 6.98584Z"
                        fill="#F7F7F7"
                        style={{ fill: '#F7F7F7', fillOpacity: 1 }}
                    />
                </g>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.42188 17.8751L6.43297 14.6732V10.2135V8.20775L3.97922 5.75391H6.43297H15.6628C16.5376 5.75391 17.2468 6.46309 17.2468 7.33791V10.1708C16.4204 9.5987 15.8254 9.13852 15.8254 9.13852L13.0331 10.8308L17.8138 14.8924L16.7305 20.3969C15.0635 21.414 13.1048 22 11.0091 22C7.53543 22 4.43779 20.3898 2.42188 17.8751ZM11.3138 6.98584H14.6552C14.6552 6.98584 14.7806 8.37687 12.9529 8.37687C11.3138 6.98574 11.3138 6.98584 11.3138 6.98584Z"
                    fill="#202123"
                    style={{ fill: '#202123', fillOpacity: 1 }}
                />
                <mask id="path-4-inside-1_2707_69355" fill="white">
                    <path d="M22.0078 11C22.0078 17.0751 17.0829 22 11.0078 22C4.93268 22 0.0078125 17.0751 0.0078125 11C0.0078125 4.92487 4.93268 0 11.0078 0C17.0829 0 22.0078 4.92487 22.0078 11Z" />
                </mask>
                <path
                    d="M21.1484 11C21.1484 16.6005 16.6083 21.1406 11.0078 21.1406V22.8594C17.5576 22.8594 22.8672 17.5498 22.8672 11H21.1484ZM11.0078 21.1406C5.4073 21.1406 0.867188 16.6005 0.867188 11H-0.851562C-0.851562 17.5498 4.45806 22.8594 11.0078 22.8594V21.1406ZM0.867188 11C0.867188 5.39949 5.4073 0.859375 11.0078 0.859375V-0.859375C4.45806 -0.859375 -0.851562 4.45025 -0.851562 11H0.867188ZM11.0078 0.859375C16.6083 0.859375 21.1484 5.39949 21.1484 11H22.8672C22.8672 4.45025 17.5576 -0.859375 11.0078 -0.859375V0.859375Z"
                    fill="#F7F7F7"
                    style={{ fill: '#F7F7F7', fillOpacity: 1 }}
                    mask="url(#path-4-inside-1_2707_69355)"
                />
            </g>
            <defs>
                <clipPath id="clip0_2707_69355">
                    <rect
                        width="22"
                        height="22"
                        fill="white"
                        style={{ fill: 'white', fillOpacity: 1 }}
                    />
                </clipPath>
            </defs>
        </svg>
    ),
    OnlookIcon: ({ className, ...props }: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={22}
            fill="none"
            className={className}
            {...props}
        >
            <g clipPath="url(#clip0_2707_69355)">
                <mask
                    id="mask0_2707_69355"
                    style={{ maskType: 'alpha' }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="23"
                    height="22"
                >
                    <circle
                        cx="11.0078"
                        cy="11"
                        r="11"
                        fill="black"
                        style={{ fill: 'black', fillOpacity: 1 }}
                    />
                </mask>
                <g mask="url(#mask0_2707_69355)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.737 20.3969C19.9024 18.4654 22.0156 14.9795 22.0156 11C22.0156 4.92487 17.0908 0 11.0156 0C4.94049 0 0.015625 4.92487 0.015625 11C0.015625 13.6014 0.918657 15.9919 2.42835 17.8751L6.43945 14.6732V10.2135V8.20775L3.9857 5.75391H6.43945H15.6693C16.5441 5.75391 17.2533 6.46309 17.2533 7.33791V10.1708C16.4269 9.5987 15.8319 9.13852 15.8319 9.13852L13.0395 10.8308L17.8203 14.8924L16.737 20.3969ZM11.3203 6.98584H14.6616C14.6616 6.98584 14.7871 8.37687 12.9594 8.37687C11.3203 6.98574 11.3203 6.98584 11.3203 6.98584Z"
                        className={className}
                        style={{ fillOpacity: 1 }}
                    />
                </g>
                <mask id="path-4-inside-1_2707_69355" fill="white">
                    <path d="M22.0078 11C22.0078 17.0751 17.0829 22 11.0078 22C4.93268 22 0.0078125 17.0751 0.0078125 11C0.0078125 4.92487 4.93268 0 11.0078 0C17.0829 0 22.0078 4.92487 22.0078 11Z" />
                </mask>
            </g>
            <defs>
                <clipPath id="clip0_2707_69355">
                    <rect
                        width="22"
                        height="22"
                        fill="white"
                        style={{ fill: 'white', fillOpacity: 1 }}
                    />
                </clipPath>
            </defs>
        </svg>
    ),
    OnlookTextLogo: ({ className, ...props }: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={139}
            height={17}
            fill="none"
            className={cn('w-1/4 dark:invert', className)}
            {...props}
        >
            <path
                d="M26.7578 16.502V4.40195H28.7485L43.3051 15.4019H44.7981V3.30195"
                stroke="black"
                style={{ stroke: 'black', strokeOpacity: 1 }}
                strokeWidth="2.73715"
            />
            <path
                d="M50.7734 3.30237V15.4023L67.0719 15.4023"
                stroke="black"
                style={{ stroke: 'black', strokeOpacity: 1 }}
                strokeWidth="2.73715"
            />
            <rect
                x="2"
                y="4.62305"
                width="19.4089"
                height="10.56"
                rx="5.27999"
                stroke="black"
                style={{ stroke: 'black', strokeOpacity: 1 }}
                strokeWidth="2.73715"
            />
            <rect
                x="69.6797"
                y="4.62305"
                width="19.4089"
                height="10.56"
                rx="5.27999"
                stroke="black"
                style={{ stroke: 'black', strokeOpacity: 1 }}
                strokeWidth="2.73715"
            />
            <rect
                x="94.0703"
                y="4.62305"
                width="19.4089"
                height="10.56"
                rx="5.27999"
                stroke="black"
                style={{ stroke: 'black', strokeOpacity: 1 }}
                strokeWidth="2.73715"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M120.823 10.3906V16.502H118.086V9.022V3.30204H120.823V7.65343H128.075L133.781 3.30213H138.295L130.657 9.126L138.583 16.502H134.565L127.999 10.3906H120.823ZM137.735 0.442137L137.66 0.34375L137.531 0.442137H137.735Z"
                fill="black"
                style={{ fill: 'black', fillOpacity: 1 }}
            />
        </svg>
    ),
    GoogleLogo: ({ className, ...props }: IconProps) => (
        <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
            />
            <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-2.86 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
            />
            <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
            />
            <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
            />
            <path d="M1 1h22v22H1z" fill="none" />
        </svg>
    ),
    ZedLogo: ({ className, ...props }: IconProps) => (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <defs>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    x1="7.977"
                    y1="7.927"
                    x2="7.977"
                    y2="9.45"
                    id="gradient-0"
                    spreadMethod="pad"
                    gradientTransform="matrix(1.251512, 0.003243, -0.002837, 1.096434, -1.931147, 0.733313)"
                >
                    <stop offset="0" style={{ stopColor: 'rgb(42, 43, 43)' }}></stop>
                    <stop offset="0.611" style={{ stopColor: 'rgb(154, 155, 154)' }}></stop>
                    <stop offset="1" style={{ stopColor: 'rgb(154, 155, 154)' }}></stop>
                </linearGradient>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    x1="6.765"
                    y1="5"
                    x2="6.765"
                    y2="10.438"
                    id="gradient-1"
                    gradientTransform="matrix(1.250362, 0, 0, 1.250362, -0.625671, 0.869228)"
                >
                    <stop offset="0" style={{ stopColor: 'rgb(47, 46, 47)' }}></stop>
                    <stop offset="0.848" style={{ stopColor: 'rgb(154, 155, 154)' }}></stop>
                    <stop offset="1" style={{ stopColor: 'rgb(154, 155, 154)' }}></stop>
                </linearGradient>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    x1="6.914"
                    y1="3.106"
                    x2="6.914"
                    y2="12.481"
                    id="gradient-2"
                    gradientTransform="matrix(1.249201, 0, 0, 1.24825, -0.615701, 0.901788)"
                >
                    <stop offset="0" style={{ stopColor: 'rgb(46, 47, 47)' }}></stop>
                    <stop offset="0.914" style={{ stopColor: 'rgb(154, 155, 154)' }}></stop>
                    <stop offset="1" style={{ stopColor: 'rgb(154, 155, 154)' }}></stop>
                </linearGradient>
            </defs>
            <path
                d="M 1.425 2.419 C 1.167 2.419 0.957 2.629 0.957 2.888 L 0.957 13.2 L 0.019 13.2 L 0.019 2.888 C 0.019 2.111 0.649 1.481 1.425 1.481 L 13.985 1.481 C 14.611 1.481 14.925 2.239 14.482 2.682 L 6.747 10.417 L 5.809 11.354 L 4.198 12.966 L 3.26 13.903 L 1.62 15.544 L 1.054 16.481 C 0.427 16.481 0.114 15.724 0.557 15.281 L 8.263 7.575 L 6.113 7.575 L 6.113 8.513 L 5.175 8.513 L 5.175 7.341 C 5.175 6.952 5.49 6.638 5.879 6.638 L 9.2 6.638 L 10.841 4.997 L 3.535 4.997 L 3.535 10.856 L 2.597 10.856 L 2.597 4.997 C 2.597 4.479 3.017 4.06 3.535 4.06 L 11.778 4.06 L 13.419 2.419 L 1.425 2.419 Z"
                style={{ fillOpacity: 1, fill: 'rgb(155, 154, 154)' }}
            ></path>
            <path
                d="M 5.78 11.381 L 6.719 10.442 L 8.9 10.442 L 8.9 9.475 L 9.839 9.475 L 9.839 10.678 C 9.839 11.067 9.524 11.381 9.136 11.381 L 5.78 11.381 Z"
                style={{ fill: 'url(#gradient-0)', fillOpacity: 1 }}
            ></path>
            <path
                d="M 3.242 13.92 L 4.18 12.983 L 11.488 12.983 L 11.488 7.121 L 12.426 7.121 L 12.426 12.983 C 12.426 13.5 12.006 13.92 11.488 13.92 L 3.242 13.92 Z"
                style={{ fillOpacity: 1, fill: 'url(#gradient-1)' }}
            ></path>
            <path
                d="M 1.043 16.481 C 1.611 15.56 1.611 15.548 1.611 15.548 L 13.594 15.548 C 13.853 15.548 14.062 15.336 14.062 15.079 L 14.062 4.78 L 15 4.78 L 15 15.079 C 15 15.854 14.372 16.481 13.594 16.481 L 1.043 16.481 Z"
                style={{ fillOpacity: 1, fill: 'url(#gradient-2)' }}
            ></path>
        </svg>
    ),
    VSCodeLogo: ({ className, ...props }: IconProps) => (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <g clipPath="url(#clip0_3223_92782)">
                <mask
                    id="mask0_3223_92782"
                    style={{ maskType: 'alpha' }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="15"
                    height="16"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.6368 15.397C10.873 15.489 11.1307 15.4831 11.3692 15.3684L14.4574 13.8824C14.7819 13.7262 14.9883 13.3978 14.9883 13.0375V2.96141C14.9883 2.60109 14.7819 2.27267 14.4574 2.11652L11.3692 0.630468C11.0562 0.479886 10.69 0.516769 10.4153 0.716446C10.3761 0.744972 10.3387 0.77682 10.3036 0.811917L4.39154 6.20562L1.81636 4.25085C1.57664 4.06887 1.24133 4.0838 1.01868 4.28631L0.192736 5.03763C-0.0796016 5.28537 -0.0799137 5.71382 0.192061 5.96195L2.42534 7.99941L0.192061 10.0369C-0.0799137 10.285 -0.0796016 10.7135 0.192736 10.9612L1.01868 11.7125C1.24133 11.915 1.57664 11.93 1.81636 11.748L4.39154 9.7932L10.3036 15.1869C10.3972 15.2805 10.507 15.351 10.6251 15.397ZM11.2406 4.59425L6.75464 7.99941L11.2406 11.4046V4.59425Z"
                        fill="white"
                        style={{ fill: 'white', fillOpacity: 1 }}
                    />
                </mask>
                <g mask="url(#mask0_3223_92782)">
                    <path
                        d="M14.4666 2.11871L11.3759 0.630613C11.0182 0.458365 10.5907 0.531023 10.3099 0.811781L0.192185 10.0368C-0.0799555 10.2849 -0.0796426 10.7133 0.19286 10.9611L1.01931 11.7124C1.24209 11.9149 1.5776 11.9298 1.81747 11.7479L14.0015 2.50477C14.4103 2.19467 14.9974 2.48621 14.9974 2.99929V2.96341C14.9974 2.60326 14.7911 2.27495 14.4666 2.11871Z"
                        fill="#787878"
                        style={{ fill: 'color(display-p3 0.4706 0.4706 0.4706)', fillOpacity: 1 }}
                    />
                    <g filter="url(#filter0_d_3223_92782)">
                        <path
                            d="M14.4666 13.8802L11.3759 15.3683C11.0182 15.5406 10.5907 15.4679 10.3099 15.1872L0.192185 5.9622C-0.0799555 5.71407 -0.0796426 5.28561 0.19286 5.03789L1.01931 4.28657C1.24209 4.08404 1.5776 4.06913 1.81747 4.25109L14.0015 13.4942C14.4103 13.8043 14.9974 13.5127 14.9974 12.9997V13.0356C14.9974 13.3957 14.7911 13.724 14.4666 13.8802Z"
                            fill="#929292"
                            style={{
                                fill: 'color(display-p3 0.5725 0.5725 0.5725)',
                                fillOpacity: 1,
                            }}
                        />
                    </g>
                    <g filter="url(#filter1_d_3223_92782)">
                        <path
                            d="M11.3787 15.3684C11.0208 15.5405 10.5933 15.4677 10.3125 15.1869C10.6585 15.5329 11.25 15.2878 11.25 14.7986V1.20024C11.25 0.710982 10.6585 0.465957 10.3125 0.811917C10.5933 0.531134 11.0208 0.458373 11.3787 0.630468L14.4688 2.11653C14.7935 2.27268 15 2.6011 15 2.9614V13.0375C15 13.3978 14.7935 13.7262 14.4688 13.8824L11.3787 15.3684Z"
                            fill="#C7C7C7"
                            style={{
                                fill: 'color(display-p3 0.7804 0.7804 0.7804)',
                                fillOpacity: 1,
                            }}
                        />
                    </g>
                    <g style={{ mixBlendMode: 'overlay' }} opacity="0.25">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.6251 15.397C10.8613 15.489 11.1307 15.4831 11.3692 15.3684L14.4574 13.8824C14.7819 13.7262 14.9883 13.3978 14.9883 13.0375V2.96141C14.9883 2.60109 14.7819 2.27267 14.4574 2.11652L11.3692 0.630468C11.0562 0.479886 10.69 0.516769 10.4153 0.716446C10.3761 0.744972 10.3387 0.77682 10.3036 0.811917L4.39154 6.20562L1.81636 4.25085C1.57664 4.06887 1.24133 4.0838 1.01868 4.28631L0.192736 5.03763C-0.0796016 5.28537 -0.0799137 5.71382 0.192061 5.96195L2.42534 7.99941L0.192061 10.0369C-0.0799137 10.285 -0.0796016 10.7135 0.192736 10.9612L1.01868 11.7125C1.24133 11.915 1.57664 11.93 1.81636 11.748L4.39154 9.7932L10.3036 15.1869C10.3972 15.2805 10.507 15.351 10.6251 15.397ZM11.2406 4.59425L6.75464 7.99941L11.2406 11.4046V4.59425Z"
                            fill="url(#paint0_linear_3223_92782)"
                        />
                    </g>
                </g>
            </g>
            <defs>
                <filter
                    id="filter0_d_3223_92782"
                    x="-1.26172"
                    y="2.87402"
                    width="17.5078"
                    height="13.8369"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="0.625" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="overlay"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_3223_92782"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_3223_92782"
                        result="shape"
                    />
                </filter>
                <filter
                    id="filter1_d_3223_92782"
                    x="9.0625"
                    y="-0.711915"
                    width="7.1875"
                    height="17.4229"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="0.625" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="overlay"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_3223_92782"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_3223_92782"
                        result="shape"
                    />
                </filter>
                <linearGradient
                    id="paint0_linear_3223_92782"
                    x1="7.48828"
                    y1="0.538086"
                    x2="7.48828"
                    y2="15.4608"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" style={{ stopColor: 'white', stopOpacity: 1 }} />
                    <stop
                        offset="1"
                        stopColor="white"
                        stopOpacity="0"
                        style={{ stopColor: 'none', stopOpacity: 0 }}
                    />
                </linearGradient>
                <clipPath id="clip0_3223_92782">
                    <rect
                        width="15"
                        height="15"
                        fill="white"
                        style={{ fill: 'white', fillOpacity: 1 }}
                        transform="translate(0 0.5)"
                    />
                </clipPath>
            </defs>
        </svg>
    ),
    CursorLogo: ({ className, ...props }: IconProps) => (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path d="M0 4.5375L7.56101 0.199219V4.5375H0Z" fill="url(#paint0_linear_3223_92799)" />
            <path
                d="M0 13.3378L7.49903 8.9375V13.3378V17.738L0 13.3378Z"
                fill="url(#paint1_linear_3223_92799)"
            />
            <path
                d="M15 13.3378L7.50097 8.9375V13.3378V17.738L15 13.3378Z"
                fill="url(#paint2_linear_3223_92799)"
            />
            <path
                d="M7.5 8.93737L14.999 4.53711V8.93737V13.3376L7.5 8.93737Z"
                fill="url(#paint3_linear_3223_92799)"
            />
            <path
                d="M7.5 8.93737L0.000967979 4.53711V8.93737V13.3376L7.5 8.93737Z"
                fill="url(#paint4_linear_3223_92799)"
            />
            <path
                d="M15 4.5375L7.56294 0.199219V4.5375H15Z"
                fill="url(#paint5_linear_3223_92799)"
            />
            <path d="M0 4.53724L7.49903 8.9375L14.9981 4.53724H0Z" fill="white" />
            <path d="M7.5 8.93829V17.8008L14.999 4.53803L7.5 8.93829Z" fill="#E4E4E4" />
            <defs>
                <linearGradient
                    id="paint0_linear_3223_92799"
                    x1="5.82828"
                    y1="3.40578"
                    x2="7.81095"
                    y2="4.54116"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#9B9B9B" />
                    <stop offset="1" stopColor="#3C3C3C" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_3223_92799"
                    x1="7.49903"
                    y1="10.5857"
                    x2="7.49903"
                    y2="17.2094"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6F6F6F" />
                    <stop offset="0.362601" stopColor="#878787" />
                    <stop offset="0.425081" stopColor="#989898" />
                    <stop offset="1" stopColor="#AEAEAE" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_3223_92799"
                    x1="7.50097"
                    y1="10.5857"
                    x2="7.50096"
                    y2="17.2094"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6F6F6F" />
                    <stop offset="0.362601" stopColor="#B0B0B0" />
                    <stop offset="0.425081" stopColor="#CCCCCC" />
                    <stop offset="1" stopColor="#D9D9D9" />
                </linearGradient>
                <linearGradient
                    id="paint3_linear_3223_92799"
                    x1="14.999"
                    y1="6.18526"
                    x2="14.999"
                    y2="12.809"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#3C3C3C" />
                    <stop offset="1" stopColor="#232323" />
                    <stop offset="1" stopColor="#AEAEAE" />
                </linearGradient>
                <linearGradient
                    id="paint4_linear_3223_92799"
                    x1="0.000968457"
                    y1="9.0934"
                    x2="6.8823"
                    y2="8.88955"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#4D4D4D" />
                    <stop offset="1" stopColor="#383838" />
                </linearGradient>
                <linearGradient
                    id="paint5_linear_3223_92799"
                    x1="9.26727"
                    y1="3.40578"
                    x2="7.30131"
                    y2="4.51313"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#414141" />
                    <stop offset="1" stopColor="#0A0A0A" />
                </linearGradient>
            </defs>
        </svg>
    ),

    WindsurfLogo: ({ className, ...props }: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={15}
            height={15}
            viewBox="0 0 69 119"
            fill="none"
            className={className}
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.627393 4.31968C-0.174635 2.2935 1.2378 0.0970819 3.41639 0.0482939C13.1956 -0.170706 36.8123 0.062288 49.4998 6.70279C70.4998 17.694 68.4998 52.1957 68.4998 52.1957C68.4998 52.1957 65.4998 38.4218 49.4998 31.2074C35.4998 24.8948 8.49979 24.2078 8.49979 24.2078L0.627393 4.31968ZM10.592 36.0501C10.0299 34.3331 11.1999 32.5724 13.0064 32.5468C20.0859 32.4467 36.6633 33.2471 51.4998 41.6936C71.9998 53.3644 68.6156 85.2391 68.6156 85.2391C68.6156 85.2391 64.4002 70.0333 50.5503 63.1971C38.4317 57.2154 17.7073 57.782 17.7073 57.782L10.592 36.0501ZM21.9398 65.9814C20.4243 66.0447 19.4843 67.5501 19.9955 68.9782L28.0902 91.5882C28.0902 91.5882 42.8182 90.6668 52.9979 95.6914C64.6318 101.434 67.9979 118.691 67.9979 118.691C67.9979 118.691 70.5051 85.1901 54.476 74.0739C42.9474 66.0789 28.1443 65.722 21.9398 65.9814Z"
                fill="currentColor"
            />
        </svg>
    ),
    Component: ({ className, ...props }: IconProps) => (
        <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M5.59712 3.15074L7.05696 1.69087C7.30109 1.44679 7.69677 1.44679 7.9409 1.69087L9.40071 3.15074C9.64484 3.39482 9.64484 3.79054 9.40071 4.03462L7.9409 5.49449C7.69677 5.73857 7.30109 5.73857 7.05696 5.49449L5.59712 4.03462C5.35304 3.79054 5.35304 3.39482 5.59712 3.15074Z"
                stroke="currentColor"
                strokeWidth="0.9375"
                strokeLinejoin="round"
            />
            <path
                d="M5.59712 10.9632L7.05696 9.50341C7.30109 9.25928 7.69677 9.25928 7.9409 9.50341L9.40071 10.9632C9.64484 11.2073 9.64484 11.603 9.40071 11.8472L7.9409 13.307C7.69677 13.5511 7.30109 13.5511 7.05696 13.307L5.59712 11.8472C5.35304 11.603 5.35304 11.2073 5.59712 10.9632Z"
                stroke="currentColor"
                strokeWidth="0.9375"
                strokeLinejoin="round"
            />
            <path
                d="M1.69087 7.05696L3.15074 5.59712C3.39482 5.35304 3.79054 5.35304 4.03462 5.59712L5.49449 7.05696C5.73857 7.30109 5.73857 7.69677 5.49449 7.9409L4.03462 9.40071C3.79054 9.64484 3.39482 9.64484 3.15074 9.40071L1.69087 7.9409C1.44679 7.69677 1.44679 7.30109 1.69087 7.05696Z"
                stroke="currentColor"
                strokeWidth="0.9375"
                strokeLinejoin="round"
            />
            <path
                d="M9.50341 7.05696L10.9632 5.59712C11.2073 5.35304 11.603 5.35304 11.8472 5.59712L13.307 7.05696C13.5511 7.30109 13.5511 7.69677 13.307 7.9409L11.8472 9.40071C11.603 9.64484 11.2073 9.64484 10.9632 9.40071L9.50341 7.9409C9.25928 7.69677 9.25928 7.30109 9.50341 7.05696Z"
                stroke="currentColor"
                strokeWidth="0.9375"
                strokeLinejoin="round"
            />
        </svg>
    ),
    Directory: ({ className, ...props }: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={15}
            height={15}
            viewBox="0 0 15 15"
            fill="none"
            className={className}
            {...props}
        >
            <path
                d="M2 11.5C2 11.7761 2.22386 12 2.5 12H12.5C12.7761 12 13 11.7761 13 11.5V5C13 4.72386 12.7761 4.5 12.5 4.5H9.5H7.83333C7.50878 4.5 7.19298 4.39473 6.93333 4.2L5.33333 3H2.5C2.22386 3 2 3.22386 2 3.5L2 6.5L2 11.5ZM2.5 13C1.67157 13 1 12.3284 1 11.5L1 6.5L1 3.5C1 2.67157 1.67157 2 2.5 2H5.41667C5.57894 2 5.73684 2.05263 5.86667 2.15L7.53333 3.4C7.61988 3.46491 7.72515 3.5 7.83333 3.5H9.5H12.5C13.3284 3.5 14 4.17157 14 5V11.5C14 12.3284 13.3284 13 12.5 13H2.5Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
            />
        </svg>
    ),
    DirectoryOpen: ({ className, ...props }: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={15}
            height={15}
            viewBox="0 0 15 15"
            fill="none"
            className={className}
            {...props}
        >
            <path
                d="M2.13713 11.844C2.22824 11.9401 2.35712 12 2.5 12H11.6916C11.9274 12 12.1311 11.8353 12.1805 11.6048L13.2519 6.60477C13.3186 6.29351 13.0813 6 12.763 6H12.5L3.80842 6C3.57265 6 3.36892 6.1647 3.31951 6.39524L3.1139 7.35476L2.7389 9.10476L2.3639 10.8548L2.1764 11.7298C2.16774 11.7702 2.15442 11.8084 2.13713 11.844ZM2 7.78036L2.1361 7.14524L2.34171 6.18571C2.48991 5.4941 3.10111 5 3.80842 5L12 5C12 4.72386 11.7761 4.5 11.5 4.5H9.5H7.83333C7.50878 4.5 7.19298 4.39473 6.93333 4.2L5.33333 3H2.5C2.22386 3 2 3.22386 2 3.5L2 6.5L2 7.78036ZM13 5.01844V5C13 4.17157 12.3284 3.5 11.5 3.5H9.5H7.83333C7.72515 3.5 7.61988 3.46491 7.53333 3.4L5.86667 2.15C5.73684 2.05263 5.57894 2 5.41667 2H2.5C1.67157 2 1 2.67157 1 3.5L1 6.5L1 11.5C1 12.3284 1.67157 13 2.5 13H11.6916C12.3989 13 13.0101 12.5059 13.1583 11.8143L14.2297 6.81429C14.4129 5.95961 13.832 5.14952 13 5.01844Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
            />
        </svg>
    ),
    EyeDropper: ({ className, ...props }: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={15}
            height={15}
            fill="none"
            className={className}
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.65098 3.01801C10.3799 2.26432 11.585 2.25428 12.3263 2.99571C13.0677 3.73715 13.0577 4.94231 12.304 5.67128L10.1041 7.79928C10.0222 7.8785 9.97552 7.98729 9.97457 8.10124C9.97362 8.21519 10.0185 8.32474 10.099 8.40531L10.6259 8.93224C10.7694 9.0757 10.7877 9.26188 10.7148 9.39002C10.5901 9.60936 10.452 9.80888 10.3287 9.92046C10.3126 9.93507 10.2989 9.94616 10.2876 9.95455C9.49985 9.34257 8.75216 8.59581 7.7444 7.58796C6.74234 6.58582 6.09783 5.92672 5.3679 5.03152C5.37539 5.02186 5.38474 5.01062 5.39637 4.9978C5.50841 4.87426 5.70999 4.73496 5.93151 4.60884C6.06074 4.53526 6.24789 4.55385 6.39152 4.6975L6.91718 5.2232C6.99774 5.30377 7.10729 5.34862 7.22122 5.34767C7.33516 5.34672 7.44394 5.30005 7.52316 5.21815L9.65098 3.01801ZM12.9273 2.39465C11.8501 1.31734 10.0992 1.33193 9.04003 2.42704L7.21263 4.31655L6.99254 4.09643C6.61768 3.72155 6.019 3.5809 5.511 3.87012C5.27335 4.00543 4.97343 4.19889 4.76679 4.42673C4.66384 4.54024 4.55311 4.69549 4.51041 4.88697C4.46226 5.10293 4.51054 5.32376 4.6602 5.50846C5.12817 6.086 5.55941 6.56637 6.05118 7.07991L2.04643 11.0827C1.4409 11.6879 1.44076 12.6695 2.04611 13.2749C2.65134 13.8802 3.6326 13.8802 4.23782 13.2749L8.23887 9.27353C8.78734 9.80411 9.29355 10.2634 9.82262 10.6694C10.01 10.8132 10.2294 10.8558 10.4415 10.8069C10.6311 10.7631 10.7853 10.6537 10.8991 10.5507C11.1269 10.3445 11.3192 10.0466 11.4536 9.81026C11.7424 9.30248 11.6007 8.70501 11.2269 8.33118L11.0056 8.10983L12.895 6.28228C13.99 5.22307 14.0046 3.47196 12.9273 2.39465ZM2.64727 11.6839C2.37384 11.9572 2.37378 12.4005 2.64713 12.6738C2.92042 12.9472 3.36352 12.9472 3.63681 12.6738L7.63192 8.6784L6.64339 7.68979L2.64727 11.6839Z"
            />
        </svg>
    ),
    Return: ({ className, ...props }: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={15}
            height={15}
            fill="none"
            className={className}
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.3312 11.3579C5.52669 11.1628 5.52705 10.8462 5.33201 10.6508L4.08798 9.40391H8.38281H12.4828C13.5322 9.40391 14.3828 8.55325 14.3828 7.50391V5.50391C14.3828 4.39934 13.4874 3.50391 12.3828 3.50391H8.88281C8.60667 3.50391 8.38281 3.72776 8.38281 4.00391C8.38281 4.28005 8.60667 4.50391 8.88281 4.50391H12.3828C12.9351 4.50391 13.3828 4.95162 13.3828 5.50391V7.50391C13.3828 8.00096 12.9799 8.40391 12.4828 8.40391H8.38281H4.08798L5.33201 7.15706C5.52705 6.96157 5.52669 6.64499 5.3312 6.44995C5.13572 6.25491 4.81914 6.25527 4.6241 6.45075L2.52886 8.55075C2.33413 8.74592 2.33413 9.06189 2.52886 9.25706L4.6241 11.3571C4.81914 11.5525 5.13572 11.5529 5.3312 11.3579Z"
            />
        </svg>
    ),
    Tablet: ({ className, ...props }: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={15}
            height={15}
            fill="none"
            className={className}
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.89885 1.78968C2.89885 1.57167 3.07558 1.39494 3.29359 1.39494H11.7146C11.9326 1.39494 12.1094 1.57167 12.1094 1.78968V13.2107C12.1094 13.4287 11.9326 13.6055 11.7146 13.6055H3.29359C3.07558 13.6055 2.89885 13.4287 2.89885 13.2107V1.78968ZM3.29359 0.605469C2.63956 0.605469 2.10938 1.13566 2.10938 1.78968V13.2107C2.10938 13.8648 2.63956 14.3949 3.29359 14.3949H11.7146C12.3687 14.3949 12.8988 13.8648 12.8988 13.2107V1.78968C12.8988 1.13566 12.3687 0.605469 11.7146 0.605469H3.29359ZM6.00041 12.2241C5.84781 12.2241 5.7241 12.3478 5.7241 12.5004C5.7241 12.653 5.84781 12.7767 6.00041 12.7767H9.00041C9.15302 12.7767 9.27673 12.653 9.27673 12.5004C9.27673 12.3478 9.15302 12.2241 9.00041 12.2241H6.00041Z"
                fill="black"
                style={{ fill: 'black', fillOpacity: 1 }}
            />
        </svg>
    ),
    Terminal: ({ className, ...props }: IconProps) => (
        <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <rect
                x="1.47"
                y="1.97"
                width="12.06"
                height="11.06"
                rx="1.03"
                stroke="currentColor"
                strokeWidth="0.94"
            />
            <path
                d="M4 9.5L6 7.5L4 5.5"
                stroke="currentColor"
                strokeWidth="0.84"
                strokeLinecap="round"
            />
            <path
                d="M7.5 9.5L10.9989 9.49303"
                stroke="currentColor"
                strokeWidth="0.9"
                strokeLinecap="round"
            />
        </svg>
    ),
    H1: ({ className, ...props }: IconProps) => (
        <H1Icon
            className={className}
            letterClassName={cn('letter', {
                'fill-foreground/50 dark:fill-foreground/50': !className?.includes(
                    'fill-white dark:fill-primary',
                ),
            })}
            levelClassName={cn('level', {
                'fill-foreground dark:fill-foreground': !className?.includes(
                    'fill-white dark:fill-primary',
                ),
            })}
            {...props}
        />
    ),
    H2: ({ className, ...props }: IconProps) => (
        <H2Icon
            className={className}
            letterClassName={cn('letter', {
                'fill-foreground/50 dark:fill-foreground/50': !className?.includes(
                    'fill-white dark:fill-primary',
                ),
            })}
            levelClassName={cn('level', {
                'fill-foreground dark:fill-foreground': !className?.includes(
                    'fill-white dark:fill-primary',
                ),
            })}
            {...props}
        />
    ),
    H3: ({ className, ...props }: IconProps) => (
        <H3Icon
            className={className}
            letterClassName={cn('letter', {
                'fill-foreground/50 dark:fill-foreground/50': !className?.includes(
                    'fill-white dark:fill-primary',
                ),
            })}
            levelClassName={cn('level', {
                'fill-foreground dark:fill-foreground': !className?.includes(
                    'fill-white dark:fill-primary',
                ),
            })}
            {...props}
        />
    ),
    H4: ({ className, ...props }: IconProps) => (
        <H4Icon
            className={className}
            letterClassName={cn(
                {
                    'fill-foreground/50 dark:fill-foreground/50': !className?.includes(
                        'fill-white dark:fill-primary',
                    ),
                },
                className,
            )}
            levelClassName={cn(
                {
                    'stroke-[#313131] dark:stroke-[#CECECE] fill-none': !className?.includes(
                        'fill-white dark:fill-primary',
                    ),
                },
                {
                    'stroke-white dark:stroke-primary fill-none': className?.includes(
                        'fill-white dark:fill-primary',
                    ),
                },
            )}
            {...props}
        />
    ),
    H5: ({ className, ...props }: IconProps) => (
        <H5Icon
            className={className}
            letterClassName={cn(
                {
                    'fill-foreground/50 dark:fill-foreground/50': !className?.includes(
                        'fill-white dark:fill-primary',
                    ),
                },
                className,
            )}
            levelClassName={cn(
                {
                    'stroke-[#313131] dark:stroke-[#CECECE] fill-none': !className?.includes(
                        'fill-white dark:fill-primary',
                    ),
                },
                {
                    'stroke-white dark:stroke-primary fill-none': className?.includes(
                        'fill-white dark:fill-primary',
                    ),
                },
            )}
            {...props}
        />
    ),
    H6: ({ className, ...props }: IconProps) => (
        <H6Icon
            className={className}
            letterClassName={cn(
                {
                    'fill-foreground/50 dark:fill-foreground/50': !className?.includes(
                        'fill-white dark:fill-primary',
                    ),
                },
                className,
            )}
            levelClassName={cn(
                {
                    'fill-[#313131] dark:fill-[#CECECE]': !className?.includes(
                        'fill-white dark:fill-primary',
                    ),
                },
                className,
            )}
            {...props}
        />
    ),
    Landscape: ({ className, ...props }: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}
        >
            <rect width="20" height="12" x="2" y="6" rx="2" />
        </svg>
    ),
    Layers: ({ className, ...props }: IconProps) => (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.05648 3.36597C8.02029 3.35197 7.9801 3.35197 7.94385 3.36597L2.80306 5.35219C2.66981 5.40368 2.66981 5.59221 2.80306 5.64369L7.94385 7.62993C7.9801 7.64393 8.02029 7.64393 8.05648 7.62993L13.1973 5.64369C13.3305 5.59221 13.3305 5.40368 13.1973 5.35219L8.05648 3.36597ZM7.60597 2.49147C7.85966 2.39347 8.14072 2.39347 8.39435 2.49147L13.5352 4.4777C14.4679 4.83807 14.4679 6.15781 13.5352 6.51819L8.39435 8.50443C8.14072 8.60243 7.85966 8.60243 7.60597 8.50443L2.46519 6.51819C1.53244 6.15781 1.53244 4.83808 2.46519 4.4777L7.60597 2.49147Z"
                fill="currentColor"
            />
            <path
                d="M13.5352 9.02203L8.39435 11.0083C8.14072 11.1063 7.85966 11.1063 7.60597 11.0083L2.46519 9.02203C1.90934 8.80728 1.68473 8.25184 1.79137 7.76172L7.91747 10.1287C7.94091 10.1377 7.96541 10.1428 7.9901 10.144C7.99572 10.1443 8.00141 10.1443 8.00704 10.1441C8.03329 10.1434 8.05947 10.1383 8.08441 10.1287L14.2091 7.76228C14.3155 8.25222 14.0909 8.80734 13.5352 9.02203Z"
                fill="currentColor"
            />
            <path
                d="M13.5352 11.522L8.39436 13.5082C8.14073 13.6062 7.85967 13.6062 7.60598 13.5082L2.46519 11.522C1.90934 11.3072 1.68473 10.7518 1.79137 10.2617L7.91748 12.6286C7.94092 12.6377 7.96542 12.6428 7.99011 12.6439C7.99573 12.6443 8.00142 12.6443 8.00704 12.6441C8.03329 12.6434 8.05948 12.6382 8.08442 12.6286L14.2091 10.2622C14.3155 10.7522 14.0909 11.3073 13.5352 11.522Z"
                fill="currentColor"
            />
        </svg>
    ),
    Play: ({ className, ...props }: IconProps) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.25 3.75C7.55558 3.75 3.75 7.55558 3.75 12.25C3.75 16.9444 7.55558 20.75 12.25 20.75C16.9444 20.75 20.75 16.9444 20.75 12.25C20.75 7.55558 16.9444 3.75 12.25 3.75ZM2.25 12.25C2.25 6.72715 6.72715 2.25 12.25 2.25C17.7728 2.25 22.25 6.72715 22.25 12.25C22.25 17.7728 17.7728 22.25 12.25 22.25C6.72715 22.25 2.25 17.7728 2.25 12.25Z"
                fill="currentColor"
            />
            <path
                d="M10.25 15.054V9.44617C10.25 9.04446 10.6998 8.80676 11.0317 9.03305L15.1441 11.837C15.4352 12.0355 15.4352 12.4647 15.1441 12.6632L11.0317 15.4671C10.6998 15.6934 10.25 15.4557 10.25 15.054Z"
                fill="currentColor"
            />
        </svg>
    ),
    Portrait: ({ className, ...props }: IconProps) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}
        >
            <rect width="12" height="20" x="6" y="2" rx="2" />
        </svg>
    ),
    Sparkles: ({ className, ...props }: IconProps) => (
        <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M12.0312 8.125C8.87219 8.39844 7.14844 10.1222 6.875 13.2812C6.59 10.0731 4.87526 8.48256 1.71875 8.125C4.92515 7.75519 6.50519 6.17515 6.875 2.96875C7.23256 6.12526 8.82306 7.84 12.0312 8.125Z"
                stroke="currentColor"
                strokeWidth="0.9375"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.3686 0.786775C12.3582 0.694694 12.2804 0.625094 12.1877 0.625C12.095 0.624906 12.017 0.69435 12.0064 0.786406C11.9374 1.38501 11.7584 1.80594 11.4697 2.09466C11.1809 2.38339 10.76 2.56237 10.1614 2.63141C10.0694 2.64203 9.99988 2.72002 10 2.81269C10.0001 2.90536 10.0697 2.98321 10.1618 2.99363C10.7505 3.06032 11.1804 3.23922 11.4759 3.52946C11.7704 3.81861 11.9531 4.23944 12.0059 4.83384C12.0143 4.92797 12.0932 5.00011 12.1877 5C12.2822 4.99989 12.3609 4.92758 12.3691 4.83343C12.4198 4.24881 12.6023 3.81912 12.8982 3.52319C13.1941 3.22726 13.6238 3.04472 14.2084 2.99411C14.3026 2.98596 14.3749 2.90721 14.375 2.81271C14.3751 2.7182 14.303 2.63929 14.2088 2.63093C13.6144 2.57813 13.1936 2.39541 12.9044 2.10094C12.6142 1.80536 12.4353 1.37549 12.3686 0.786775Z"
                fill="currentColor"
            />
        </svg>
    ),
    Stop: ({ className, ...props }: IconProps) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path d="M9.5 9.5H14.5V14.5H9.5V9.5Z" fill="currentColor" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
                fill="currentColor"
            />
        </svg>
    ),
    Styles: ({ className, ...props }: IconProps) => (
        <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M4.21875 4.375V5.15625C4.21875 5.84661 4.77839 6.40625 5.46875 6.40625H11.4062C12.0966 6.40625 12.6562 5.84661 12.6562 5.15625V3.59375C12.6562 2.90339 12.0966 2.34375 11.4062 2.34375H5.46875C4.77839 2.34375 4.21875 2.90339 4.21875 3.59375V4.375ZM4.21875 4.375H2.96875C2.62357 4.375 2.34375 4.65482 2.34375 5V7.03125C2.34375 7.72162 2.90339 8.28125 3.59375 8.28125H7.5C7.84519 8.28125 8.125 8.56106 8.125 8.90625V9.6875M9.53125 13.2812V11.4062C9.53125 10.6296 8.90162 10 8.125 10C7.34838 10 6.71875 10.6296 6.71875 11.4062V13.2812"
                stroke="currentColor"
                strokeWidth="0.9375"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    Lightbulb: ({ className, ...props }: IconProps) => (
        <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M5.46661 11.0938V10.6878C5.46661 10.4515 5.33135 10.2385 5.13002 10.1149C4.99455 10.0316 4.8638 9.9415 4.73826 9.84494C3.66103 9.0165 2.9668 7.71456 2.9668 6.25056C2.9668 3.74771 4.99575 1.71875 7.49858 1.71875C10.0015 1.71875 12.0304 3.74771 12.0304 6.25056C12.0304 7.71456 11.3361 9.0165 10.259 9.84494C10.1334 9.9415 10.0026 10.0316 9.8672 10.1149C9.66583 10.2385 9.53058 10.4515 9.53058 10.6878V11.0938M5.46661 11.0938V11.8743C5.46661 12.9965 6.37639 13.9062 7.49858 13.9062C8.62083 13.9062 9.53058 12.9965 9.53058 11.8743V11.0938M5.46661 11.0938H9.53058"
                stroke="currentColor"
                strokeWidth="0.9375"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
        </svg>
    ),
    LightbulbSlash: ({ className, ...props }: IconProps) => (
        <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M5.46661 11.0938V10.6878C5.46661 10.4515 5.33135 10.2385 5.13002 10.1149C4.99455 10.0316 4.8638 9.9415 4.73826 9.84494C3.66103 9.0165 2.9668 7.71456 2.9668 6.25056C2.9668 5.43145 3.18411 4.66309 3.56423 4M5.46661 11.0938V11.8743C5.46661 12.9965 6.37639 13.9062 7.49858 13.9062C8.62083 13.9062 9.53058 12.9965 9.53058 11.8743V11.0938M5.46661 11.0938H7.49859H9.53058M9.53058 11.0938V10.6878C9.54789 10.432 9.85184 10.1149 9.85184 10.1149"
                stroke="currentColor"
                strokeWidth="0.9375"
                strokeLinecap="square"
                strokeLinejoin="round"
            />
            <path
                d="M1.71875 1.71875L12.5 12.5"
                stroke="currentColor"
                strokeWidth="0.9375"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.3816 8.58925C11.7938 7.9065 12.0309 7.10621 12.0309 6.25056C12.0309 3.74771 10.002 1.71875 7.4991 1.71875C6.63093 1.71875 5.58622 1.90585 5.22461 2.2983"
                stroke="currentColor"
                strokeWidth="0.9375"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    Brand: ({ className, ...props }: IconProps) => (
        <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M2.96875 2.1875H6.40625V1.25H2.96875V2.1875ZM7.1875 2.96875V10.3125H8.125V2.96875H7.1875ZM2.1875 10.3125V2.96875H1.25V10.3125H2.1875ZM4.6875 12.8125C3.30679 12.8125 2.1875 11.6932 2.1875 10.3125H1.25C1.25 12.211 2.78902 13.75 4.6875 13.75V12.8125ZM7.1875 10.3125C7.1875 11.6932 6.06821 12.8125 4.6875 12.8125V13.75C6.586 13.75 8.125 12.211 8.125 10.3125H7.1875ZM2.96875 1.25C2.01951 1.25 1.25 2.01951 1.25 2.96875H2.1875C2.1875 2.53727 2.53727 2.1875 2.96875 2.1875V1.25ZM7.26175 2.41667L10.2387 4.13543L10.7074 3.32352L7.7305 1.60478L7.26175 2.41667ZM10.5246 5.20263L6.85275 11.5625L7.66469 12.0312L11.3366 5.67138L10.5246 5.20263ZM10.8648 4.76152L12.5836 7.7385L13.3954 7.26975L11.6767 4.29277L10.8648 4.76152ZM12.2976 8.80569L5.93772 12.4776L6.4065 13.2894L12.7664 9.61756L12.2976 8.80569ZM12.5836 7.7385C12.7993 8.11213 12.6713 8.58994 12.2976 8.80569L12.7664 9.61756C13.5884 9.143 13.8701 8.09181 13.3954 7.26975L12.5836 7.7385ZM7.7305 1.60478C7.49619 1.4695 7.242 1.39533 6.98762 1.37818L6.92456 2.31356C7.03919 2.32128 7.15419 2.35457 7.26175 2.41667L7.7305 1.60478ZM6.40625 2.1875C6.53044 2.1875 6.64656 2.21612 6.74963 2.2667L7.16256 1.42504C6.93381 1.3128 6.67669 1.25 6.40625 1.25V2.1875ZM6.74963 2.2667C7.00994 2.39441 7.1875 2.66128 7.1875 2.96875H8.125C8.125 2.29011 7.73163 1.70423 7.16256 1.42504L6.74963 2.2667ZM11.6767 4.29277C11.5415 4.05854 11.3585 3.86727 11.1469 3.72526L10.6245 4.50372C10.7199 4.56771 10.8027 4.65399 10.8648 4.76152L11.6767 4.29277ZM10.2387 4.13543C10.3462 4.19751 10.4325 4.28036 10.4965 4.37571L11.2749 3.85327C11.1329 3.64168 10.9416 3.45874 10.7074 3.32352L10.2387 4.13543ZM10.4965 4.37571C10.6581 4.61645 10.6784 4.93636 10.5246 5.20263L11.3366 5.67138C11.6759 5.08366 11.6281 4.37957 11.2749 3.85327L10.4965 4.37571ZM5.3125 10.3125C5.3125 10.6577 5.03268 10.9375 4.6875 10.9375V11.875C5.55044 11.875 6.25 11.1754 6.25 10.3125H5.3125ZM4.6875 10.9375C4.34232 10.9375 4.0625 10.6577 4.0625 10.3125H3.125C3.125 11.1754 3.82456 11.875 4.6875 11.875V10.9375ZM4.0625 10.3125C4.0625 9.96731 4.34232 9.6875 4.6875 9.6875V8.75C3.82456 8.75 3.125 9.44956 3.125 10.3125H4.0625ZM4.6875 9.6875C5.03268 9.6875 5.3125 9.96731 5.3125 10.3125H6.25C6.25 9.44956 5.55044 8.75 4.6875 8.75V9.6875Z"
                fill="currentColor"
            />
        </svg>
    ),

    ArrowDown: ArrowDownIcon,
    ArrowLeft: ArrowLeftIcon,
    ArrowRight: ArrowRightIcon,
    ArrowUp: ArrowUpIcon,
    AlignLeft: AlignLeftIcon,
    AlignCenterHorizontally: AlignCenterHorizontallyIcon,
    AlignRight: AlignRightIcon,
    AlignTop: AlignTopIcon,
    AlignCenterVertically: AlignCenterVerticallyIcon,
    AlignBottom: AlignBottomIcon,

    BorderAll: BorderAllIcon,
    BorderBottom: BorderBottomIcon,
    BorderDashed: BorderDashedIcon,
    BorderDotted: BorderDottedIcon,
    BorderLeft: BorderLeftIcon,
    BorderRight: BorderRightIcon,
    BorderSolid: BorderSolidIcon,
    BorderTop: BorderTopIcon,
    Box: BoxIcon,
    Button: ButtonIcon,
    Bookmark: BookmarkIcon,
    BookmarkFilled: BookmarkFilledIcon,

    ChatBubble: ChatBubbleIcon,
    Check: CheckIcon,
    CheckCircled: CheckCircledIcon,
    Checkbox: CheckboxIcon,
    ChevronDown: ChevronDownIcon,
    ChevronRight: ChevronRightIcon,
    ChevronUp: ChevronUpIcon,
    CircleBackslash: CircleBackslashIcon,
    Clipboard: ClipboardIcon,
    ClipboardCopy: ClipboardCopyIcon,
    Code: CodeIcon,
    ComponentInstance: ComponentInstanceIcon,
    Copy: CopyIcon,
    CornerTopLeft: CornerTopLeftIcon,
    Corners: CornersIcon,
    CounterClockwiseClock: CounterClockwiseClockIcon,
    CrossL: Cross1Icon,
    CrossS: Cross2Icon,
    CrossCircled: CrossCircledIcon,
    Cube: CubeIcon,
    CursorArrow: CursorArrowIcon,
    Circle: CircleIcon,

    Desktop: DesktopIcon,
    DiscordLogo: DiscordLogoIcon,
    DotsVertical: DotsVerticalIcon,
    DotsHorizontal: DotsHorizontalIcon,
    Download: DownloadIcon,
    DropdownMenu: DropdownMenuIcon,
    DragHandleDots: DragHandleDots2Icon,

    ExclamationTriangle: ExclamationTriangleIcon,
    Exit: ExitIcon,
    ExternalLink: ExternalLinkIcon,
    EyeOpen: EyeOpenIcon,
    EyeClosed: EyeClosedIcon,
    EnvelopeClosed: EnvelopeClosedIcon,

    File: FileIcon,
    FilePlus: FilePlusIcon,
    Frame: FrameIcon,

    Gear: GearIcon,
    GitHubLogo: GitHubLogoIcon,
    Globe: GlobeIcon,
    Group: GroupIcon,

    Hand: HandIcon,

    Image: ImageIcon,
    Input: InputIcon,
    InfoCircled: InfoCircledIcon,

    Keyboard: KeyboardIcon,

    Laptop: LaptopIcon,
    Link: Link2Icon,
    LinkNone: LinkNone1Icon,
    ListBullet: ListBulletIcon,
    LockOpen: LockOpen1Icon,
    LockClosed: LockClosedIcon,

    MagnifyingGlass: MagnifyingGlassIcon,
    MagicWand: MagicWandIcon,
    Minus: MinusIcon,
    MinusCircled: MinusCircledIcon,
    Mobile: MobileIcon,
    Moon: MoonIcon,
    MixerHorizontal: MixerHorizontalIcon,
    MixerVertical: MixerVerticalIcon,

    Pencil: Pencil1Icon,
    PencilPaper: Pencil2Icon,
    Pilcrow: PilcrowIcon,
    PinLeft: PinLeftIcon,
    PinRight: PinRightIcon,
    Plus: PlusIcon,
    PlusCircled: PlusCircledIcon,
    Person: PersonIcon,

    QuestionMarkCircled: QuestionMarkCircledIcon,
    Reload: ReloadIcon,
    Reset: ResetIcon,
    RowSpacing: RowSpacingIcon,

    Scissors: ScissorsIcon,
    Section: SectionIcon,
    Shadow: ShadowIcon,
    Share: Share2Icon,
    Size: SizeIcon,
    Sun: SunIcon,
    SpaceBetweenHorizontally: SpaceBetweenHorizontallyIcon,
    SpaceBetweenVertically: SpaceBetweenVerticallyIcon,
    Square: SquareIcon,
    SketchLogo: SketchLogoIcon,

    Text: TextIcon,
    TextAlignCenter: TextAlignCenterIcon,
    TextAlignLeft: TextAlignLeftIcon,
    TextAlignRight: TextAlignRightIcon,
    TextAlignJustified: ({ className, ...props }: IconProps) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M3.75 4.75H20.25M3.75 12H20.25M3.75 19.25H20.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    Trash: TrashIcon,
    Tokens: TokensIcon,
    Upload: UploadIcon,

    Video: VideoIcon,
    ViewGrid: ViewGridIcon,
    ViewHorizontal: ViewHorizontalIcon,
    ViewVertical: ViewVerticalIcon,
    EmptyState: ({ className, ...props }: IconProps) => (
        <svg
            width="130"
            height="119"
            viewBox="0 0 130 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <g filter="url(#filter0_d_4954_166260)">
                <rect
                    x="14.75"
                    y="10.5"
                    width="90"
                    height="90"
                    fill="url(#paint0_linear)"
                    fillOpacity="0.2"
                    shapeRendering="crispEdges"
                />
                <rect
                    x="15"
                    y="10.75"
                    width="89.5"
                    height="89.5"
                    className="stroke-gray-300 dark:stroke-gray-600"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                    shapeRendering="crispEdges"
                />
            </g>
            <g filter="url(#filter1_d_4954_166260)">
                <path
                    d="M112.018 81.4171L117.758 78.8025L111.789 65.6879L122.654 65.2087L98.5703 44.3438V76.1775L106.039 68.3025L112.018 81.4171Z"
                    className="fill-gray-200 stroke-gray-400 dark:fill-gray-900 dark:stroke-gray-500"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear"
                    x1="59.75"
                    y1="10.5"
                    x2="59.75"
                    y2="100.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop className="[stop-color:var(--color-gray-50)] dark:[stop-color:var(--color-gray-700)]" />
                    <stop
                        offset="1"
                        className="[stop-color:var(--color-gray-200)] dark:[stop-color:var(--color-gray-900)]"
                    />
                </linearGradient>
                <filter
                    id="filter0_d_4954_166260"
                    x="0.75"
                    y="0.5"
                    width="118"
                    height="118"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="7" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4954_166260"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4954_166260"
                        result="shape"
                    />
                </filter>
                <filter
                    id="filter1_d_4954_166260"
                    x="85.25"
                    y="43"
                    width="48"
                    height="48"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4954_166260"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4954_166260"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    ),
    TextColorSymbol: ({ className, ...props }: IconProps) => (
        <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.78056 0.966376C7.63595 0.666883 7.3327 0.476562 7.00012 0.476562C6.66754 0.476562 6.36429 0.666883 6.21968 0.966376L1.00048 11.7751C0.792354 12.2061 0.973047 12.7242 1.40407 12.9324C1.8351 13.1405 2.35324 12.9598 2.56137 12.5288L4.28366 8.96199H9.71658L11.4389 12.5288C11.647 12.9598 12.1651 13.1405 12.5962 12.9324C13.0272 12.7242 13.2079 12.2061 12.9998 11.7751L7.78056 0.966376ZM8.94399 7.36199L7.00012 3.33634L5.05626 7.36199H8.94399Z"
                fill="currentColor"
            />
        </svg>
    ),
    Width: ({ className, ...props }: IconProps) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M6 12H18M6 12L8 9M6 12L8 15M18 12L16 9M18 12L16 15M21 21V3M3 21V3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    Height: ({ className, ...props }: IconProps) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M12 18L12 6M12 18L9 16M12 18L15 16M12 6L9 8M12 6L15 8M21 3H3M21 21H3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    Padding: ({ className, ...props }: IconProps) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M20.25 17.05V6.95C20.25 5.8299 20.25 5.26984 20.032 4.84202C19.8403 4.46569 19.5343 4.15973 19.158 3.96799C18.7302 3.75 18.1701 3.75 17.05 3.75H6.95C5.8299 3.75 5.26984 3.75 4.84202 3.96799C4.46569 4.15973 4.15973 4.46569 3.96799 4.84202C3.75 5.26984 3.75 5.8299 3.75 6.95V17.05C3.75 18.1701 3.75 18.7302 3.96799 19.158C4.15973 19.5343 4.46569 19.8403 4.84202 20.032C5.26984 20.25 5.8299 20.25 6.95 20.25H17.05C18.1701 20.25 18.7302 20.25 19.158 20.032C19.5343 19.8403 19.8403 19.5343 20.032 19.158C20.25 18.7302 20.25 18.1701 20.25 17.05Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M9 6.75H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M9 17.25H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M17.25 9V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6.75 9V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    Margin: ({ className, ...props }: IconProps) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M18 15.6727V8.32727C18 7.51265 18 7.10534 17.8415 6.7942C17.702 6.5205 17.4795 6.29799 17.2058 6.15854C16.8947 6 16.4873 6 15.6727 6H8.32727C7.51265 6 7.10534 6 6.7942 6.15854C6.5205 6.29799 6.29799 6.5205 6.15854 6.7942C6 7.10534 6 7.51265 6 8.32727V15.6727C6 16.4873 6 16.8947 6.15854 17.2058C6.29799 17.4795 6.5205 17.702 6.7942 17.8415C7.10534 18 7.51265 18 8.32727 18H15.6727C16.4873 18 16.8947 18 17.2058 17.8415C17.4795 17.702 17.702 17.4795 17.8415 17.2058C18 16.8947 18 16.4873 18 15.6727Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M7.5 3H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M7.5 21H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M21 7.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M3 7.5L3 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    CornerRadius: ({ className, ...props }: IconProps) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M20.25 3.75H13.35C9.98969 3.75 8.30953 3.75 7.02606 4.40396C5.89708 4.9792 4.9792 5.89708 4.40396 7.02606C3.75 8.30953 3.75 9.98969 3.75 13.35V20.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    Layout: ({ className, ...props }: IconProps) => (
        <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M12.1875 4.34375V10.6563H13.125V4.34375H12.1875ZM10.6563 12.1875H4.34375V13.125H10.6563V12.1875ZM2.8125 10.6563V4.34375H1.875V10.6563H2.8125ZM4.34375 2.8125H10.6563V1.875H4.34375V2.8125ZM4.34375 12.1875C3.98598 12.1875 3.74585 12.1871 3.56093 12.172C3.38147 12.1574 3.29567 12.1312 3.23907 12.1024L2.81346 12.9377C3.02424 13.0451 3.24716 13.087 3.48458 13.1064C3.71654 13.1254 4.00145 13.125 4.34375 13.125V12.1875ZM1.875 10.6563C1.875 10.9986 1.87464 11.2834 1.89359 11.5154C1.91299 11.7529 1.95493 11.9758 2.06233 12.1866L2.89765 11.7609C2.86881 11.7043 2.84264 11.6185 2.82798 11.4391C2.81286 11.2541 2.8125 11.014 2.8125 10.6563H1.875ZM3.23907 12.1024C3.09207 12.0274 2.97255 11.9079 2.89765 11.7609L2.06233 12.1866C2.22711 12.5099 2.49005 12.7729 2.81346 12.9377L3.23907 12.1024ZM12.1875 10.6563C12.1875 11.014 12.1871 11.2541 12.172 11.4391C12.1574 11.6185 12.1312 11.7043 12.1024 11.7609L12.9377 12.1866C13.0451 11.9758 13.087 11.7529 13.1064 11.5154C13.1254 11.2834 13.125 10.9986 13.125 10.6563H12.1875ZM10.6563 13.125C10.9986 13.125 11.2834 13.1254 11.5154 13.1064C11.7529 13.087 11.9758 13.0451 12.1866 12.9377L11.7609 12.1024C11.7043 12.1312 11.6185 12.1574 11.4391 12.172C11.2541 12.1871 11.014 12.1875 10.6563 12.1875V13.125ZM12.1024 11.7609C12.0274 11.9079 11.9079 12.0274 11.7609 12.1024L12.1866 12.9377C12.5099 12.7729 12.7729 12.5099 12.9377 12.1866L12.1024 11.7609ZM13.125 4.34375C13.125 4.00145 13.1254 3.71654 13.1064 3.48458C13.087 3.24716 13.0451 3.02424 12.9377 2.81346L12.1024 3.23907C12.1312 3.29567 12.1574 3.38147 12.172 3.56093C12.1871 3.74585 12.1875 3.98598 12.1875 4.34375H13.125ZM10.6563 2.8125C11.014 2.8125 11.2541 2.81286 11.4391 2.82798C11.6185 2.84264 11.7043 2.86881 11.7609 2.89765L12.1866 2.06233C11.9758 1.95493 11.7529 1.91299 11.5154 1.89359C11.2834 1.87464 10.9986 1.875 10.6563 1.875V2.8125ZM12.9377 2.81346C12.7729 2.49005 12.5099 2.22711 12.1866 2.06233L11.7609 2.89765C11.9079 2.97255 12.0274 3.09207 12.1024 3.23907L12.9377 2.81346ZM2.8125 4.34375C2.8125 3.98598 2.81286 3.74585 2.82798 3.56093C2.84264 3.38147 2.86881 3.29567 2.89765 3.23907L2.06233 2.81346C1.95493 3.02424 1.91299 3.24716 1.89359 3.48458C1.87464 3.71654 1.875 4.00145 1.875 4.34375H2.8125ZM4.34375 1.875C4.00145 1.875 3.71654 1.87464 3.48458 1.89359C3.24716 1.91299 3.02424 1.95493 2.81346 2.06233L3.23907 2.89765C3.29567 2.86881 3.38147 2.84264 3.56093 2.82798C3.74585 2.81286 3.98598 2.8125 4.34375 2.8125V1.875ZM2.89765 3.23907C2.97255 3.09207 3.09207 2.97255 3.23907 2.89765L2.81346 2.06233C2.49005 2.22711 2.22711 2.49005 2.06233 2.81346L2.89765 3.23907Z"
                fill="currentColor"
            />
            <path d="M12.6562 6.09375H2.34375" stroke="currentColor" strokeLinecap="square" />
            <path
                d="M7.03125 12.6562V13.125H7.96875V12.6562H7.03125ZM7.96875 6.09375V5.625H7.03125V6.09375H7.96875ZM7.96875 12.6562V6.09375H7.03125V12.6562H7.96875Z"
                fill="currentColor"
            />
        </svg>
    ),
    StateCursor: ({ className, ...props }: IconProps) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M11.875 16.375L15.464 12.786C15.594 12.656 15.544 12.435 15.3709 12.3736L4.24478 8.42557C4.04643 8.35519 3.85518 8.54643 3.92557 8.74478L7.87354 19.8709C7.93499 20.044 8.15599 20.094 8.28593 19.964L11.875 16.375ZM11.875 16.375L16.75 21.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
            />
            <path
                d="M20.25 3.75H10.75"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
            />
            <path
                d="M20.25 7.75H15.75"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
            />
        </svg>
    ),
    BorderEdit: ({ className, ...props }: IconProps) => (
        <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <rect
                x="1"
                y="1"
                width="14"
                height="1"
                fill="#929292"
                style={{
                    fill: '#929292',
                    fillOpacity: 1,
                }}
            />
            <rect
                x="1"
                y="4"
                width="14"
                height="1.75"
                fill="#929292"
                style={{
                    fill: '#929292',
                    fillOpacity: 1,
                }}
            />
            <rect
                x="1"
                y="7.75"
                width="14"
                height="3.25"
                fill="#929292"
                style={{
                    fill: '#929292',
                    fillOpacity: 1,
                }}
            />
        </svg>
    ),

    BackgroundImage: ({ className, ...props }: IconProps) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M12.5 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H17C17.93 21 18.395 21 18.7765 20.8978C19.8117 20.6204 20.6204 19.8117 20.8978 18.7765C21 18.395 21 17.93 21 17M19 8V2M16 5H22M10.5 8.5C10.5 9.60457 9.60457 10.5 8.5 10.5C7.39543 10.5 6.5 9.60457 6.5 8.5C6.5 7.39543 7.39543 6.5 8.5 6.5C9.60457 6.5 10.5 7.39543 10.5 8.5ZM14.99 11.9181L6.53115 19.608C6.05536 20.0406 5.81747 20.2568 5.79643 20.4442C5.77819 20.6066 5.84045 20.7676 5.96319 20.8755C6.10478 21 6.42628 21 7.06929 21H16.456C17.8951 21 18.6147 21 19.1799 20.7582C19.8894 20.4547 20.4547 19.8894 20.7582 19.1799C21 18.6147 21 17.8951 21 16.456C21 15.9717 21 15.7296 20.9471 15.5042C20.8805 15.2208 20.753 14.9554 20.5733 14.7264C20.4303 14.5442 20.2412 14.3929 19.8631 14.0905L17.0658 11.8527C16.6874 11.5499 16.4982 11.3985 16.2898 11.3451C16.1061 11.298 15.9129 11.3041 15.7325 11.3627C15.5279 11.4291 15.3486 11.5921 14.99 11.9181Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    PaintBucket: ({ className, ...props }: IconProps) => (
        <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.0192 8.08981L12.5496 8.62015C12.6902 8.47947 12.7693 8.28865 12.7692 8.0897C12.7692 7.89074 12.6901 7.69995 12.5494 7.55931L12.0192 8.08981ZM5.70934 0.720613C5.41653 0.427635 4.94167 0.427506 4.6487 0.720325C4.35574 1.01314 4.35561 1.48803 4.64841 1.78101L5.70934 0.720613ZM3.25984 7.84988L3.97312 8.08164L3.97312 8.08163L3.25984 7.84988ZM3.25985 8.33298L3.97313 8.10123L3.9731 8.10114L3.25985 8.33298ZM7.21618 12.2895L7.44799 11.5762L7.44791 11.5761L7.21618 12.2895ZM7.69926 12.2895L7.46753 11.5762L7.46745 11.5762L7.69926 12.2895ZM8.87239 12.2975L12.5496 8.62015L11.4889 7.55947L7.81175 11.2368L8.87239 12.2975ZM12.5494 7.55931L7.98806 3.00065L6.92776 4.06167L11.4891 8.62032L12.5494 7.55931ZM7.98837 3.00096L5.70934 0.720613L4.64841 1.78101L6.92745 4.06136L7.98837 3.00096ZM7.45791 3.53116C6.92759 3.00082 6.92759 3.00082 6.92758 3.00083C6.92758 3.00083 6.92757 3.00084 6.92756 3.00085C6.92756 3.00086 6.92754 3.00087 6.92753 3.00088C6.92752 3.00089 6.9275 3.00091 6.92749 3.00093C6.92747 3.00094 6.92745 3.00096 6.92743 3.00098C6.9274 3.00101 6.92738 3.00103 6.92735 3.00106C6.92733 3.00108 6.9273 3.00111 6.92727 3.00114C6.92724 3.00117 6.92721 3.0012 6.92717 3.00124C6.92714 3.00127 6.9271 3.00131 6.92706 3.00135C6.92702 3.00139 6.92698 3.00143 6.92694 3.00147C6.9269 3.00152 6.92685 3.00156 6.9268 3.00161C6.92675 3.00166 6.92671 3.00171 6.92665 3.00176C6.9266 3.00181 6.92655 3.00186 6.92649 3.00192C6.92644 3.00197 6.92638 3.00203 6.92632 3.00209C6.92626 3.00215 6.9262 3.00222 6.92613 3.00228C6.92607 3.00234 6.926 3.00241 6.92593 3.00248C6.92586 3.00255 6.92579 3.00262 6.92572 3.00269C6.92565 3.00276 6.92557 3.00284 6.92549 3.00292C6.92542 3.00299 6.92534 3.00307 6.92526 3.00315C6.92518 3.00323 6.92509 3.00332 6.92501 3.0034C6.92492 3.00349 6.92484 3.00358 6.92475 3.00366C6.92466 3.00375 6.92457 3.00385 6.92447 3.00394C6.92438 3.00403 6.92428 3.00413 6.92419 3.00423C6.92409 3.00432 6.92399 3.00442 6.92389 3.00452C6.92378 3.00463 6.92368 3.00473 6.92358 3.00484C6.92347 3.00494 6.92336 3.00505 6.92325 3.00516C6.92314 3.00527 6.92303 3.00538 6.92292 3.00549C6.9228 3.00561 6.92269 3.00572 6.92257 3.00584C6.92245 3.00596 6.92233 3.00608 6.92221 3.0062C6.92209 3.00632 6.92196 3.00645 6.92184 3.00657C6.92171 3.0067 6.92158 3.00683 6.92145 3.00696C6.92132 3.00709 6.92119 3.00722 6.92106 3.00735C6.92092 3.00749 6.92079 3.00762 6.92065 3.00776C6.92051 3.0079 6.92037 3.00804 6.92023 3.00818C6.92009 3.00832 6.91994 3.00847 6.9198 3.00861C6.91965 3.00876 6.9195 3.00891 6.91935 3.00906C6.9192 3.00921 6.91905 3.00936 6.9189 3.00951C6.91875 3.00967 6.91859 3.00982 6.91843 3.00998C6.91827 3.01014 6.91811 3.0103 6.91795 3.01046C6.91779 3.01062 6.91763 3.01078 6.91746 3.01095C6.9173 3.01111 6.91713 3.01128 6.91696 3.01145C6.91679 3.01162 6.91662 3.01179 6.91645 3.01196C6.91627 3.01214 6.9161 3.01231 6.91592 3.01249C6.91574 3.01267 6.91557 3.01285 6.91538 3.01303C6.9152 3.01321 6.91502 3.01339 6.91484 3.01358C6.91465 3.01376 6.91446 3.01395 6.91428 3.01414C6.91409 3.01432 6.9139 3.01451 6.9137 3.01471C6.91351 3.0149 6.91332 3.01509 6.91312 3.01529C6.91293 3.01549 6.91273 3.01568 6.91253 3.01588C6.91233 3.01608 6.91213 3.01629 6.91192 3.01649C6.91172 3.01669 6.91151 3.0169 6.91131 3.01711C6.9111 3.01731 6.91089 3.01752 6.91068 3.01773C6.91047 3.01794 6.91025 3.01816 6.91004 3.01837C6.90982 3.01859 6.90961 3.0188 6.90939 3.01902C6.90917 3.01924 6.90895 3.01946 6.90873 3.01968C6.9085 3.01991 6.90828 3.02013 6.90805 3.02036C6.90783 3.02058 6.9076 3.02081 6.90737 3.02104C6.90714 3.02127 6.90691 3.0215 6.90668 3.02174C6.90644 3.02197 6.90621 3.0222 6.90597 3.02244C6.90573 3.02268 6.90549 3.02292 6.90525 3.02316C6.90501 3.0234 6.90477 3.02364 6.90453 3.02389C6.90428 3.02413 6.90404 3.02438 6.90379 3.02462C6.90354 3.02487 6.90329 3.02512 6.90304 3.02537C6.90279 3.02562 6.90253 3.02588 6.90228 3.02613C6.90202 3.02639 6.90177 3.02664 6.90151 3.0269C6.90125 3.02716 6.90099 3.02742 6.90073 3.02768C6.90046 3.02795 6.9002 3.02821 6.89993 3.02848C6.89967 3.02874 6.8994 3.02901 6.89913 3.02928C6.89886 3.02955 6.89859 3.02982 6.89832 3.03009C6.89805 3.03037 6.89777 3.03064 6.89749 3.03092C6.89722 3.03119 6.89694 3.03147 6.89666 3.03175C6.89638 3.03203 6.8961 3.03231 6.89582 3.0326C6.89553 3.03288 6.89525 3.03316 6.89496 3.03345C6.89467 3.03374 6.89438 3.03403 6.89409 3.03432C6.8938 3.03461 6.89351 3.0349 6.89322 3.03519C6.89292 3.03549 6.89263 3.03578 6.89233 3.03608C6.89203 3.03638 6.89174 3.03668 6.89143 3.03698C6.89113 3.03728 6.89083 3.03758 6.89053 3.03788C6.89022 3.03819 6.88992 3.03849 6.88961 3.0388C6.8893 3.03911 6.88899 3.03942 6.88868 3.03973C6.88837 3.04004 6.88806 3.04035 6.88775 3.04067C6.88743 3.04098 6.88711 3.0413 6.8868 3.04161C6.88648 3.04193 6.88616 3.04225 6.88584 3.04257C6.88552 3.04289 6.8852 3.04322 6.88487 3.04354C6.88455 3.04387 6.88422 3.04419 6.88389 3.04452C6.88357 3.04485 6.88324 3.04518 6.88291 3.04551C6.88257 3.04584 6.88224 3.04617 6.88191 3.0465C6.88157 3.04684 6.88124 3.04717 6.8809 3.04751C6.88056 3.04785 6.88022 3.04819 6.87988 3.04853C6.87954 3.04887 6.8792 3.04921 6.87886 3.04956C6.87851 3.0499 6.87817 3.05025 6.87782 3.05059C6.87747 3.05094 6.87712 3.05129 6.87677 3.05164C6.87642 3.05199 6.87607 3.05234 6.87571 3.0527C6.87536 3.05305 6.87501 3.05341 6.87465 3.05376C6.87429 3.05412 6.87393 3.05448 6.87357 3.05484C6.87321 3.0552 6.87285 3.05556 6.87249 3.05593C6.87212 3.05629 6.87176 3.05665 6.87139 3.05702C6.87103 3.05739 6.87066 3.05776 6.87029 3.05813C6.86992 3.0585 6.86955 3.05887 6.86917 3.05924C6.8688 3.05961 6.86843 3.05999 6.86805 3.06036C6.86767 3.06074 6.8673 3.06112 6.86692 3.0615C6.86654 3.06188 6.86616 3.06226 6.86577 3.06264C6.86539 3.06302 6.86501 3.0634 6.86462 3.06379C6.86424 3.06418 6.86385 3.06456 6.86346 3.06495C6.86307 3.06534 6.86268 3.06573 6.86229 3.06612C6.8619 3.06651 6.86151 3.06691 6.86111 3.0673C6.86072 3.0677 6.86032 3.06809 6.85992 3.06849C6.85953 3.06889 6.85913 3.06929 6.85873 3.06969C6.85833 3.07009 6.85792 3.07049 6.85752 3.07089C6.85712 3.0713 6.85671 3.0717 6.8563 3.07211C6.8559 3.07252 6.85549 3.07292 6.85508 3.07333C6.85467 3.07374 6.85426 3.07416 6.85385 3.07457C6.85343 3.07498 6.85302 3.0754 6.8526 3.07581C6.85219 3.07623 6.85177 3.07664 6.85135 3.07706C6.85093 3.07748 6.85051 3.0779 6.85009 3.07832C6.84967 3.07875 6.84925 3.07917 6.84882 3.07959C6.8484 3.08002 6.84797 3.08044 6.84754 3.08087C6.84711 3.0813 6.84669 3.08173 6.84626 3.08216C6.84582 3.08259 6.84539 3.08302 6.84496 3.08345C6.84453 3.08389 6.84409 3.08432 6.84366 3.08476C6.84322 3.08519 6.84278 3.08563 6.84234 3.08607C6.8419 3.08651 6.84146 3.08695 6.84102 3.08739C6.84058 3.08784 6.84014 3.08828 6.83969 3.08872C6.83925 3.08917 6.8388 3.08961 6.83835 3.09006C6.8379 3.09051 6.83745 3.09096 6.837 3.09141C6.83655 3.09186 6.8361 3.09231 6.83565 3.09277C6.83519 3.09322 6.83474 3.09367 6.83428 3.09413C6.83383 3.09459 6.83337 3.09504 6.83291 3.0955C6.83245 3.09596 6.83199 3.09642 6.83153 3.09688C6.83107 3.09735 6.83061 3.09781 6.83014 3.09827C6.82968 3.09874 6.82921 3.0992 6.82874 3.09967C6.82828 3.10014 6.82781 3.10061 6.82734 3.10108C6.82687 3.10155 6.8264 3.10202 6.82592 3.10249C6.82545 3.10296 6.82498 3.10344 6.8245 3.10391C6.82403 3.10439 6.82355 3.10486 6.82307 3.10534C6.82259 3.10582 6.82211 3.1063 6.82163 3.10678C6.82115 3.10726 6.82067 3.10774 6.82019 3.10823C6.8197 3.10871 6.81922 3.1092 6.81873 3.10968C6.81825 3.11017 6.81776 3.11066 6.81727 3.11114C6.81678 3.11163 6.81629 3.11212 6.8158 3.11261C6.81531 3.11311 6.81482 3.1136 6.81432 3.11409C6.81383 3.11459 6.81333 3.11508 6.81284 3.11558C6.81234 3.11608 6.81184 3.11657 6.81134 3.11707C6.81084 3.11757 6.81034 3.11807 6.80984 3.11858C6.80934 3.11908 6.80884 3.11958 6.80833 3.12008C6.80783 3.12059 6.80732 3.12109 6.80681 3.1216C6.80631 3.12211 6.8058 3.12262 6.80529 3.12313C6.80478 3.12364 6.80427 3.12415 6.80376 3.12466C6.80324 3.12517 6.80273 3.12568 6.80222 3.1262C6.8017 3.12671 6.80119 3.12723 6.80067 3.12775C6.80015 3.12826 6.79963 3.12878 6.79911 3.1293C6.79859 3.12982 6.79807 3.13034 6.79755 3.13086C6.79703 3.13139 6.79651 3.13191 6.79598 3.13244C6.79546 3.13296 6.79493 3.13349 6.7944 3.13401C6.79388 3.13454 6.79335 3.13507 6.79282 3.1356C6.79229 3.13613 6.79176 3.13666 6.79123 3.13719C6.79069 3.13772 6.79016 3.13826 6.78963 3.13879C6.78909 3.13932 6.78856 3.13986 6.78802 3.1404C6.78748 3.14093 6.78694 3.14147 6.78641 3.14201C6.78587 3.14255 6.78533 3.14309 6.78478 3.14363C6.78424 3.14417 6.7837 3.14472 6.78316 3.14526C6.78261 3.1458 6.78207 3.14635 6.78152 3.1469C6.78097 3.14744 6.78043 3.14799 6.77988 3.14854C6.77933 3.14909 6.77878 3.14964 6.77823 3.15019C6.77768 3.15074 6.77713 3.15129 6.77657 3.15184C6.77602 3.1524 6.77546 3.15295 6.77491 3.15351C6.77435 3.15406 6.7738 3.15462 6.77324 3.15518C6.77268 3.15574 6.77212 3.1563 6.77156 3.15686C6.771 3.15742 6.77044 3.15798 6.76988 3.15854C6.76931 3.1591 6.76875 3.15967 6.76819 3.16023C6.76762 3.1608 6.76705 3.16136 6.76649 3.16193C6.76592 3.1625 6.76535 3.16306 6.76478 3.16363C6.76421 3.1642 6.76364 3.16477 6.76307 3.16534C6.7625 3.16592 6.76193 3.16649 6.76135 3.16706C6.76078 3.16764 6.76021 3.16821 6.75963 3.16879C6.75905 3.16936 6.75848 3.16994 6.7579 3.17052C6.75732 3.1711 6.75674 3.17168 6.75616 3.17226C6.75558 3.17284 6.755 3.17342 6.75442 3.174C6.75383 3.17458 6.75325 3.17517 6.75267 3.17575C6.75208 3.17634 6.7515 3.17692 6.75091 3.17751C6.75032 3.17809 6.74973 3.17868 6.74915 3.17927C6.74856 3.17986 6.74797 3.18045 6.74738 3.18104C6.74678 3.18163 6.74619 3.18222 6.7456 3.18282C6.74501 3.18341 6.74441 3.184 6.74382 3.1846C6.74322 3.1852 6.74263 3.18579 6.74203 3.18639C6.74143 3.18699 6.74083 3.18758 6.74023 3.18818C6.73963 3.18878 6.73903 3.18938 6.73843 3.18998C6.73783 3.19059 6.73723 3.19119 6.73663 3.19179C6.73602 3.1924 6.73542 3.193 6.73481 3.19361C6.73421 3.19421 6.7336 3.19482 6.73299 3.19542C6.73239 3.19603 6.73178 3.19664 6.73117 3.19725C6.73056 3.19786 6.72995 3.19847 6.72934 3.19908C6.72872 3.19969 6.72811 3.20031 6.7275 3.20092C6.72689 3.20153 6.72627 3.20215 6.72566 3.20276C6.72504 3.20338 6.72442 3.20399 6.72381 3.20461C6.72319 3.20523 6.72257 3.20585 6.72195 3.20647C6.72133 3.20709 6.72071 3.20771 6.72009 3.20833C6.71947 3.20895 6.71885 3.20957 6.71822 3.21019C6.7176 3.21082 6.71698 3.21144 6.71635 3.21207C6.71573 3.21269 6.7151 3.21332 6.71447 3.21394C6.71385 3.21457 6.71322 3.2152 6.71259 3.21583C6.71196 3.21646 6.71133 3.21709 6.7107 3.21772C6.71007 3.21835 6.70944 3.21898 6.70881 3.21961C6.70818 3.22024 6.70754 3.22088 6.70691 3.22151C6.70627 3.22215 6.70564 3.22278 6.705 3.22342C6.70437 3.22405 6.70373 3.22469 6.70309 3.22533C6.70245 3.22597 6.70181 3.22661 6.70117 3.22725C6.70053 3.22789 6.69989 3.22853 6.69925 3.22917C6.69861 3.22981 6.69797 3.23045 6.69732 3.23109C6.69668 3.23174 6.69604 3.23238 6.69539 3.23303C6.69475 3.23367 6.6941 3.23432 6.69345 3.23497C6.69281 3.23561 6.69216 3.23626 6.69151 3.23691C6.69086 3.23756 6.69021 3.23821 6.68956 3.23886C6.68891 3.23951 6.68826 3.24016 6.68761 3.24081C6.68696 3.24146 6.6863 3.24212 6.68565 3.24277C6.685 3.24342 6.68434 3.24408 6.68369 3.24473C6.68303 3.24539 6.68238 3.24604 6.68172 3.2467C6.68106 3.24736 6.6804 3.24802 6.67974 3.24868C6.67909 3.24933 6.67843 3.24999 6.67777 3.25065C6.67711 3.25131 6.67644 3.25198 6.67578 3.25264C6.67512 3.2533 6.67446 3.25396 6.67379 3.25463C6.67313 3.25529 6.67247 3.25595 6.6718 3.25662C6.67113 3.25729 6.67047 3.25795 6.6698 3.25862C6.66913 3.25929 6.66847 3.25995 6.6678 3.26062C6.66713 3.26129 6.66646 3.26196 6.66579 3.26263C6.66512 3.2633 6.66445 3.26397 6.66378 3.26464C6.66311 3.26531 6.66243 3.26599 6.66176 3.26666C6.66109 3.26733 6.66041 3.26801 6.65974 3.26868C6.65906 3.26936 6.65839 3.27003 6.65771 3.27071C6.65704 3.27138 6.65636 3.27206 6.65568 3.27274C6.655 3.27342 6.65433 3.27409 6.65365 3.27477C6.65297 3.27545 6.65229 3.27613 6.65161 3.27681C6.65093 3.27749 6.65024 3.27818 6.64956 3.27886C6.64888 3.27954 6.6482 3.28022 6.64751 3.28091C6.64683 3.28159 6.64615 3.28228 6.64546 3.28296C6.64478 3.28365 6.64409 3.28433 6.6434 3.28502C6.64272 3.2857 6.64203 3.28639 6.64134 3.28708C6.64065 3.28777 6.63996 3.28846 6.63928 3.28915C6.63859 3.28984 6.6379 3.29053 6.63721 3.29122C6.63651 3.29191 6.63582 3.2926 6.63513 3.29329C6.63444 3.29398 6.63375 3.29468 6.63305 3.29537C6.63236 3.29606 6.63166 3.29676 6.63097 3.29745C6.63027 3.29815 6.62958 3.29884 6.62888 3.29954C6.62819 3.30024 6.62749 3.30093 6.62679 3.30163C6.62609 3.30233 6.6254 3.30303 6.6247 3.30372C6.624 3.30442 6.6233 3.30512 6.6226 3.30582C6.6219 3.30652 6.6212 3.30722 6.6205 3.30793C6.61979 3.30863 6.61909 3.30933 6.61839 3.31003C6.61769 3.31074 6.61698 3.31144 6.61628 3.31214C6.61558 3.31285 6.61487 3.31355 6.61417 3.31426C6.61346 3.31496 6.61275 3.31567 6.61205 3.31638C6.61134 3.31708 6.61063 3.31779 6.60993 3.3185C6.60922 3.3192 6.60851 3.31991 6.6078 3.32062C6.60709 3.32133 6.60638 3.32204 6.60567 3.32275C6.60496 3.32346 6.60425 3.32417 6.60354 3.32488C6.60283 3.3256 6.60212 3.32631 6.6014 3.32702C6.60069 3.32773 6.59998 3.32845 6.59926 3.32916C6.59855 3.32987 6.59783 3.33059 6.59712 3.3313C6.5964 3.33202 6.59569 3.33273 6.59497 3.33345C6.59426 3.33417 6.59354 3.33488 6.59282 3.3356C6.59211 3.33632 6.59139 3.33704 6.59067 3.33775C6.58995 3.33847 6.58923 3.33919 6.58851 3.33991C6.58779 3.34063 6.58707 3.34135 6.58635 3.34207C6.58563 3.34279 6.58491 3.34351 6.58419 3.34424C6.58347 3.34496 6.58274 3.34568 6.58202 3.3464C6.5813 3.34712 6.58058 3.34785 6.57985 3.34857C6.57913 3.3493 6.5784 3.35002 6.57768 3.35075C6.57695 3.35147 6.57623 3.3522 6.5755 3.35292C6.57478 3.35365 6.57405 3.35437 6.57332 3.3551C6.5726 3.35583 6.57187 3.35656 6.57114 3.35728C6.57041 3.35801 6.56968 3.35874 6.56896 3.35947C6.56823 3.3602 6.5675 3.36093 6.56677 3.36166C6.56604 3.36239 6.56531 3.36312 6.56458 3.36385C6.56384 3.36458 6.56311 3.36531 6.56238 3.36604C6.56165 3.36677 6.56092 3.36751 6.56018 3.36824C6.55945 3.36897 6.55872 3.36971 6.55798 3.37044C6.55725 3.37117 6.55652 3.37191 6.55578 3.37264C6.55505 3.37338 6.55431 3.37411 6.55358 3.37485C6.55284 3.37558 6.5521 3.37632 6.55137 3.37706C6.55063 3.37779 6.54989 3.37853 6.54916 3.37927C6.54842 3.38 6.54768 3.38074 6.54694 3.38148C6.54621 3.38222 6.54547 3.38296 6.54473 3.3837C6.54399 3.38444 6.54325 3.38518 6.54251 3.38592C6.54177 3.38666 6.54103 3.3874 6.54029 3.38814C6.53955 3.38888 6.53881 3.38962 6.53806 3.39036C6.53732 3.3911 6.53658 3.39184 6.53584 3.39259C6.5351 3.39333 6.53435 3.39407 6.53361 3.39482C6.53287 3.39556 6.53212 3.3963 6.53138 3.39705C6.53063 3.39779 6.52989 3.39854 6.52915 3.39928C6.5284 3.40003 6.52766 3.40077 6.52691 3.40152C6.52616 3.40226 6.52542 3.40301 6.52467 3.40375C6.52393 3.4045 6.52318 3.40525 6.52243 3.40599C6.52168 3.40674 6.52094 3.40749 6.52019 3.40824C6.51944 3.40898 6.51869 3.40973 6.51795 3.41048C6.5172 3.41123 6.51645 3.41198 6.5157 3.41273C6.51495 3.41348 6.5142 3.41423 6.51345 3.41498C6.5127 3.41573 6.51195 3.41648 6.5112 3.41723C6.51045 3.41798 6.5097 3.41873 6.50895 3.41948C6.5082 3.42023 6.50744 3.42098 6.50669 3.42173C6.50594 3.42249 6.50519 3.42324 6.50444 3.42399C6.50368 3.42474 6.50293 3.4255 6.50218 3.42625C6.50142 3.427 6.50067 3.42776 6.49992 3.42851C6.49916 3.42926 6.49841 3.43002 6.49765 3.43077C6.4969 3.43153 6.49615 3.43228 6.49539 3.43304C6.49464 3.43379 6.49388 3.43455 6.49313 3.4353C6.49237 3.43606 6.49161 3.43681 6.49086 3.43757C6.4901 3.43832 6.48935 3.43908 6.48859 3.43984C6.48783 3.44059 6.48708 3.44135 6.48632 3.44211C6.48556 3.44287 6.4848 3.44362 6.48405 3.44438C6.48329 3.44514 6.48253 3.4459 6.48177 3.44665C6.48101 3.44741 6.48026 3.44817 6.4795 3.44893C6.47874 3.44969 6.47798 3.45045 6.47722 3.45121C6.47646 3.45197 6.4757 3.45273 6.47494 3.45349C6.47418 3.45424 6.47342 3.455 6.47266 3.45576C6.4719 3.45652 6.47114 3.45729 6.47038 3.45805C6.46962 3.45881 6.46886 3.45957 6.4681 3.46033C6.46734 3.46109 6.46658 3.46185 6.46582 3.46261C6.46505 3.46337 6.46429 3.46413 6.46353 3.4649C6.46277 3.46566 6.46201 3.46642 6.46125 3.46718C6.46048 3.46794 6.45972 3.46871 6.45896 3.46947C6.4582 3.47023 6.45743 3.471 6.45667 3.47176C6.45591 3.47252 6.45514 3.47328 6.45438 3.47405C6.45362 3.47481 6.45285 3.47557 6.45209 3.47634C6.45133 3.4771 6.45056 3.47787 6.4498 3.47863C6.44903 3.47939 6.44827 3.48016 6.44751 3.48092C6.44674 3.48169 6.44598 3.48245 6.44521 3.48322C6.44445 3.48398 6.44368 3.48475 6.44292 3.48551C6.44215 3.48628 6.44139 3.48704 6.44062 3.48781C6.43986 3.48857 6.43909 3.48934 6.43833 3.4901C6.43756 3.49087 6.4368 3.49163 6.43603 3.4924C6.43526 3.49316 6.4345 3.49393 6.43373 3.4947C6.43297 3.49546 6.4322 3.49623 6.43143 3.497C6.43067 3.49776 6.4299 3.49853 6.42914 3.49929C6.42837 3.50006 6.4276 3.50083 6.42684 3.50159C6.42607 3.50236 6.4253 3.50313 6.42454 3.50389C6.42377 3.50466 6.423 3.50543 6.42223 3.5062C6.42147 3.50696 6.4207 3.50773 6.41993 3.5085C6.41917 3.50926 6.4184 3.51003 6.41763 3.5108C6.41686 3.51157 6.4161 3.51233 6.41533 3.5131C6.41456 3.51387 6.41379 3.51464 6.41303 3.5154C6.41226 3.51617 6.41149 3.51694 6.41072 3.51771C6.40995 3.51848 6.40919 3.51924 6.40842 3.52001C6.40765 3.52078 6.40688 3.52155 6.40612 3.52231C6.40535 3.52308 6.40458 3.52385 6.40381 3.52462C6.40304 3.52539 6.40227 3.52616 6.40151 3.52692C6.40074 3.52769 6.39997 3.52846 6.3992 3.52923C6.39843 3.53 6.39767 3.53076 6.3969 3.53153C6.39613 3.5323 6.39536 3.53307 6.39459 3.53384C6.39382 3.53461 6.39306 3.53537 6.39229 3.53614C6.39152 3.53691 6.39075 3.53768 6.38998 3.53845C6.38921 3.53922 6.38845 3.53998 6.38768 3.54075C6.38691 3.54152 6.38614 3.54229 6.38537 3.54306C6.3846 3.54383 6.38384 3.54459 6.38307 3.54536C6.3823 3.54613 6.38153 3.5469 6.38076 3.54767C6.37999 3.54844 6.37923 3.5492 6.37846 3.54997C6.37769 3.55074 6.37692 3.55151 6.37615 3.55228C6.37539 3.55305 6.37462 3.55381 6.37385 3.55458C6.37308 3.55535 6.37231 3.55612 6.37155 3.55689C6.37078 3.55765 6.37001 3.55842 6.36924 3.55919C6.36847 3.55996 6.36771 3.56073 6.36694 3.56149C6.36617 3.56226 6.3654 3.56303 6.36464 3.5638C6.36387 3.56456 6.3631 3.56533 6.36233 3.5661C6.36157 3.56687 6.3608 3.56763 6.36003 3.5684C6.35926 3.56917 6.3585 3.56994 6.35773 3.5707C6.35696 3.57147 6.35619 3.57224 6.35543 3.573C6.35466 3.57377 6.35389 3.57454 6.35313 3.5753C6.35236 3.57607 6.35159 3.57684 6.35083 3.57761C6.35006 3.57837 6.34929 3.57914 6.34853 3.5799C6.34776 3.58067 6.347 3.58144 6.34623 3.5822C6.34546 3.58297 6.3447 3.58374 6.34393 3.5845C6.34316 3.58527 6.3424 3.58603 6.34163 3.5868C6.34087 3.58756 6.3401 3.58833 6.33934 3.5891C6.33857 3.58986 6.33781 3.59063 6.33704 3.59139C6.33628 3.59216 6.33551 3.59292 6.33475 3.59369C6.33398 3.59445 6.33322 3.59522 6.33245 3.59598C6.33169 3.59675 6.33092 3.59751 6.33016 3.59827C6.3294 3.59904 6.32863 3.5998 6.32787 3.60057C6.3271 3.60133 6.32634 3.60209 6.32558 3.60286C6.32481 3.60362 6.32405 3.60438 6.32329 3.60515C6.32252 3.60591 6.32176 3.60667 6.321 3.60744C6.32023 3.6082 6.31947 3.60896 6.31871 3.60972C6.31795 3.61049 6.31718 3.61125 6.31642 3.61201C6.31566 3.61277 6.3149 3.61353 6.31414 3.6143C6.31338 3.61506 6.31261 3.61582 6.31185 3.61658C6.31109 3.61734 6.31033 3.6181 6.30957 3.61886C6.30881 3.61962 6.30805 3.62039 6.30729 3.62115C6.30653 3.62191 6.30577 3.62267 6.30501 3.62343C6.30425 3.62419 6.30349 3.62495 6.30273 3.62571C6.30197 3.62646 6.30121 3.62722 6.30045 3.62798C6.29969 3.62874 6.29893 3.6295 6.29818 3.63026C6.29742 3.63102 6.29666 3.63178 6.2959 3.63253C6.29514 3.63329 6.29438 3.63405 6.29363 3.63481C6.29287 3.63556 6.29211 3.63632 6.29136 3.63708C6.2906 3.63784 6.28984 3.63859 6.28909 3.63935C6.28833 3.6401 6.28757 3.64086 6.28682 3.64162C6.28606 3.64237 6.28531 3.64313 6.28455 3.64388C6.2838 3.64464 6.28304 3.64539 6.28229 3.64615C6.28153 3.6469 6.28078 3.64766 6.28002 3.64841C6.27927 3.64917 6.27852 3.64992 6.27776 3.65067C6.27701 3.65143 6.27626 3.65218 6.2755 3.65293C6.27475 3.65369 6.274 3.65444 6.27324 3.65519C6.27249 3.65594 6.27174 3.65669 6.27099 3.65745C6.27024 3.6582 6.26949 3.65895 6.26874 3.6597C6.26798 3.66045 6.26723 3.6612 6.26648 3.66195C6.26573 3.6627 6.26498 3.66345 6.26423 3.6642C6.26348 3.66495 6.26273 3.6657 6.26199 3.66645C6.26124 3.6672 6.26049 3.66795 6.25974 3.6687C6.25899 3.66944 6.25824 3.67019 6.2575 3.67094C6.25675 3.67169 6.256 3.67243 6.25526 3.67318C6.25451 3.67393 6.25376 3.67467 6.25302 3.67542C6.25227 3.67617 6.25152 3.67691 6.25078 3.67766C6.25003 3.6784 6.24929 3.67915 6.24854 3.67989C6.2478 3.68064 6.24706 3.68138 6.24631 3.68212C6.24557 3.68287 6.24483 3.68361 6.24408 3.68435C6.24334 3.6851 6.2426 3.68584 6.24186 3.68658C6.24111 3.68732 6.24037 3.68807 6.23963 3.68881C6.23889 3.68955 6.23815 3.69029 6.23741 3.69103C6.23667 3.69177 6.23593 3.69251 6.23519 3.69325C6.23445 3.69399 6.23371 3.69473 6.23297 3.69547C6.23223 3.69621 6.23149 3.69694 6.23075 3.69768C6.23002 3.69842 6.22928 3.69916 6.22854 3.69989C6.22781 3.70063 6.22707 3.70137 6.22633 3.7021C6.2256 3.70284 6.22486 3.70358 6.22413 3.70431C6.22339 3.70505 6.22266 3.70578 6.22192 3.70652C6.22119 3.70725 6.22045 3.70798 6.21972 3.70872C6.21899 3.70945 6.21825 3.71018 6.21752 3.71092C6.21679 3.71165 6.21606 3.71238 6.21532 3.71311C6.21459 3.71384 6.21386 3.71457 6.21313 3.71531C6.2124 3.71604 6.21167 3.71677 6.21094 3.7175C6.21021 3.71823 6.20948 3.71895 6.20875 3.71968C6.20803 3.72041 6.2073 3.72114 6.20657 3.72187C6.20584 3.72259 6.20512 3.72332 6.20439 3.72405C6.20366 3.72477 6.20294 3.7255 6.20221 3.72623C6.20149 3.72695 6.20076 3.72768 6.20004 3.7284C6.19931 3.72913 6.19859 3.72985 6.19786 3.73057C6.19714 3.7313 6.19642 3.73202 6.1957 3.73274C6.19497 3.73346 6.19425 3.73419 6.19353 3.73491C6.19281 3.73563 6.19209 3.73635 6.19137 3.73707C6.19065 3.73779 6.18993 3.73851 6.18921 3.73923C6.18849 3.73995 6.18777 3.74067 6.18705 3.74138C6.18634 3.7421 6.18562 3.74282 6.1849 3.74354C6.18419 3.74425 6.18347 3.74497 6.18275 3.74568C6.18204 3.7464 6.18132 3.74712 6.18061 3.74783C6.17989 3.74854 6.17918 3.74926 6.17847 3.74997C6.17775 3.75069 6.17704 3.7514 6.17633 3.75211C6.17562 3.75282 6.1749 3.75353 6.17419 3.75425C6.17348 3.75496 6.17277 3.75567 6.17206 3.75638C6.17135 3.75709 6.17064 3.7578 6.16993 3.7585C6.16923 3.75921 6.16852 3.75992 6.16781 3.76063C6.1671 3.76134 6.1664 3.76204 6.16569 3.76275C6.16498 3.76345 6.16428 3.76416 6.16357 3.76486C6.16287 3.76557 6.16217 3.76627 6.16146 3.76698C6.16076 3.76768 6.16006 3.76838 6.15935 3.76909C6.15865 3.76979 6.15795 3.77049 6.15725 3.77119C6.15655 3.77189 6.15585 3.77259 6.15515 3.77329C6.15445 3.77399 6.15375 3.77469 6.15305 3.77539C6.15235 3.77609 6.15165 3.77679 6.15096 3.77748C6.15026 3.77818 6.14956 3.77888 6.14887 3.77957C6.14817 3.78027 6.14748 3.78096 6.14678 3.78166C6.14609 3.78235 6.1454 3.78304 6.1447 3.78374C6.14401 3.78443 6.14332 3.78512 6.14263 3.78581C6.14193 3.78651 6.14124 3.7872 6.14055 3.78789C6.13986 3.78858 6.13917 3.78927 6.13848 3.78996C6.1378 3.79064 6.13711 3.79133 6.13642 3.79202C6.13573 3.79271 6.13505 3.79339 6.13436 3.79408C6.13367 3.79477 6.13299 3.79545 6.1323 3.79614C6.13162 3.79682 6.13094 3.7975 6.13025 3.79819C6.12957 3.79887 6.12889 3.79955 6.12821 3.80023C6.12752 3.80092 6.12684 3.8016 6.12616 3.80228C6.12548 3.80296 6.1248 3.80364 6.12413 3.80431C6.12345 3.80499 6.12277 3.80567 6.12209 3.80635C6.12142 3.80703 6.12074 3.8077 6.12006 3.80838C6.11939 3.80905 6.11871 3.80973 6.11804 3.8104C6.11736 3.81108 6.11669 3.81175 6.11602 3.81242C6.11535 3.81309 6.11467 3.81377 6.114 3.81444C6.11333 3.81511 6.11266 3.81578 6.11199 3.81645C6.11132 3.81712 6.11066 3.81779 6.10999 3.81845C6.10932 3.81912 6.10865 3.81979 6.10799 3.82045C6.10732 3.82112 6.10666 3.82179 6.10599 3.82245C6.10533 3.82312 6.10466 3.82378 6.104 3.82444C6.10334 3.82511 6.10267 3.82577 6.10201 3.82643C6.10135 3.82709 6.10069 3.82775 6.10003 3.82841C6.09937 3.82907 6.09871 3.82973 6.09805 3.83039C6.0974 3.83105 6.09674 3.8317 6.09608 3.83236C6.09543 3.83302 6.09477 3.83367 6.09412 3.83433C6.09346 3.83498 6.09281 3.83563 6.09215 3.83629C6.0915 3.83694 6.09085 3.83759 6.0902 3.83824C6.08955 3.8389 6.0889 3.83955 6.08825 3.8402C6.0876 3.84085 6.08695 3.84149 6.0863 3.84214C6.08565 3.84279 6.08501 3.84344 6.08436 3.84408C6.08371 3.84473 6.08307 3.84537 6.08242 3.84602C6.08178 3.84666 6.08114 3.84731 6.08049 3.84795C6.07985 3.84859 6.07921 3.84923 6.07857 3.84987C6.07793 3.85051 6.07729 3.85115 6.07665 3.85179C6.07601 3.85243 6.07537 3.85307 6.07473 3.85371C6.0741 3.85435 6.07346 3.85498 6.07283 3.85562C6.07219 3.85625 6.07156 3.85689 6.07092 3.85752C6.07029 3.85815 6.06966 3.85879 6.06902 3.85942C6.06839 3.86005 6.06776 3.86068 6.06713 3.86131C6.0665 3.86194 6.06587 3.86257 6.06524 3.8632C6.06462 3.86383 6.06399 3.86445 6.06336 3.86508C6.06274 3.86571 6.06211 3.86633 6.06149 3.86695C6.06086 3.86758 6.06024 3.8682 6.05962 3.86882C6.059 3.86945 6.05837 3.87007 6.05775 3.87069C6.05713 3.87131 6.05651 3.87193 6.0559 3.87255C6.05528 3.87317 6.05466 3.87378 6.05404 3.8744C6.05343 3.87502 6.05281 3.87563 6.0522 3.87625C6.05158 3.87686 6.05097 3.87747 6.05036 3.87809C6.04974 3.8787 6.04913 3.87931 6.04852 3.87992C6.04791 3.88053 6.0473 3.88114 6.04669 3.88175C6.04608 3.88236 6.04548 3.88297 6.04487 3.88357C6.04426 3.88418 6.04366 3.88479 6.04305 3.88539L7.10369 4.94607C7.1043 4.94547 7.1049 4.94486 7.10551 4.94425C7.10612 4.94365 7.10672 4.94304 7.10733 4.94243C7.10794 4.94182 7.10855 4.94121 7.10916 4.9406C7.10977 4.93999 7.11038 4.93938 7.111 4.93877C7.11161 4.93815 7.11222 4.93754 7.11284 4.93693C7.11345 4.93631 7.11407 4.9357 7.11468 4.93508C7.1153 4.93446 7.11592 4.93385 7.11654 4.93323C7.11715 4.93261 7.11777 4.93199 7.11839 4.93137C7.11902 4.93075 7.11964 4.93013 7.12026 4.9295C7.12088 4.92888 7.1215 4.92826 7.12213 4.92763C7.12275 4.92701 7.12338 4.92639 7.124 4.92576C7.12463 4.92513 7.12526 4.92451 7.12589 4.92388C7.12651 4.92325 7.12714 4.92262 7.12777 4.92199C7.1284 4.92136 7.12903 4.92073 7.12966 4.9201C7.1303 4.91947 7.13093 4.91883 7.13156 4.9182C7.1322 4.91757 7.13283 4.91693 7.13347 4.9163C7.1341 4.91566 7.13474 4.91503 7.13537 4.91439C7.13601 4.91375 7.13665 4.91311 7.13729 4.91247C7.13793 4.91183 7.13857 4.91119 7.13921 4.91055C7.13985 4.90991 7.14049 4.90927 7.14113 4.90863C7.14178 4.90799 7.14242 4.90734 7.14306 4.9067C7.14371 4.90605 7.14435 4.90541 7.145 4.90476C7.14565 4.90412 7.14629 4.90347 7.14694 4.90282C7.14759 4.90217 7.14824 4.90153 7.14889 4.90088C7.14954 4.90023 7.15019 4.89958 7.15084 4.89892C7.15149 4.89827 7.15214 4.89762 7.15279 4.89697C7.15345 4.89631 7.1541 4.89566 7.15476 4.89501C7.15541 4.89435 7.15607 4.8937 7.15672 4.89304C7.15738 4.89238 7.15804 4.89173 7.15869 4.89107C7.15935 4.89041 7.16001 4.88975 7.16067 4.88909C7.16133 4.88843 7.16199 4.88777 7.16265 4.88711C7.16331 4.88645 7.16398 4.88579 7.16464 4.88512C7.1653 4.88446 7.16597 4.8838 7.16663 4.88313C7.1673 4.88247 7.16796 4.8818 7.16863 4.88113C7.16929 4.88047 7.16996 4.8798 7.17063 4.87913C7.1713 4.87847 7.17196 4.8778 7.17263 4.87713C7.1733 4.87646 7.17397 4.87579 7.17464 4.87512C7.17532 4.87445 7.17599 4.87377 7.17666 4.8731C7.17733 4.87243 7.17801 4.87176 7.17868 4.87108C7.17935 4.87041 7.18003 4.86973 7.1807 4.86906C7.18138 4.86838 7.18206 4.86771 7.18273 4.86703C7.18341 4.86635 7.18409 4.86567 7.18477 4.86499C7.18544 4.86432 7.18612 4.86364 7.1868 4.86296C7.18748 4.86228 7.18817 4.8616 7.18885 4.86091C7.18953 4.86023 7.19021 4.85955 7.19089 4.85887C7.19158 4.85818 7.19226 4.8575 7.19294 4.85682C7.19363 4.85613 7.19431 4.85545 7.195 4.85476C7.19569 4.85407 7.19637 4.85339 7.19706 4.8527C7.19775 4.85201 7.19844 4.85132 7.19912 4.85064C7.19981 4.84995 7.2005 4.84926 7.20119 4.84857C7.20188 4.84788 7.20257 4.84719 7.20327 4.84649C7.20396 4.8458 7.20465 4.84511 7.20534 4.84442C7.20604 4.84372 7.20673 4.84303 7.20742 4.84234C7.20812 4.84164 7.20881 4.84095 7.20951 4.84025C7.2102 4.83956 7.2109 4.83886 7.2116 4.83816C7.21229 4.83747 7.21299 4.83677 7.21369 4.83607C7.21439 4.83537 7.21509 4.83467 7.21579 4.83397C7.21649 4.83327 7.21719 4.83257 7.21789 4.83187C7.21859 4.83117 7.21929 4.83047 7.21999 4.82977C7.2207 4.82906 7.2214 4.82836 7.2221 4.82766C7.22281 4.82695 7.22351 4.82625 7.22422 4.82554C7.22492 4.82484 7.22563 4.82413 7.22633 4.82343C7.22704 4.82272 7.22774 4.82202 7.22845 4.82131C7.22916 4.8206 7.22987 4.81989 7.23058 4.81918C7.23128 4.81848 7.23199 4.81777 7.2327 4.81706C7.23341 4.81635 7.23412 4.81564 7.23483 4.81493C7.23554 4.81421 7.23626 4.8135 7.23697 4.81279C7.23768 4.81208 7.23839 4.81137 7.23911 4.81065C7.23982 4.80994 7.24053 4.80922 7.24125 4.80851C7.24196 4.8078 7.24268 4.80708 7.24339 4.80636C7.24411 4.80565 7.24483 4.80493 7.24554 4.80422C7.24626 4.8035 7.24698 4.80278 7.24769 4.80206C7.24841 4.80135 7.24913 4.80063 7.24985 4.79991C7.25057 4.79919 7.25129 4.79847 7.25201 4.79775C7.25273 4.79703 7.25345 4.79631 7.25417 4.79559C7.25489 4.79487 7.25561 4.79414 7.25634 4.79342C7.25706 4.7927 7.25778 4.79198 7.25851 4.79125C7.25923 4.79053 7.25995 4.78981 7.26068 4.78908C7.2614 4.78836 7.26213 4.78763 7.26285 4.78691C7.26358 4.78618 7.2643 4.78545 7.26503 4.78473C7.26576 4.784 7.26648 4.78327 7.26721 4.78255C7.26794 4.78182 7.26867 4.78109 7.2694 4.78036C7.27012 4.77963 7.27085 4.77891 7.27158 4.77818C7.27231 4.77745 7.27304 4.77672 7.27377 4.77599C7.2745 4.77525 7.27523 4.77452 7.27597 4.77379C7.2767 4.77306 7.27743 4.77233 7.27816 4.7716C7.27889 4.77086 7.27963 4.77013 7.28036 4.7694C7.28109 4.76866 7.28183 4.76793 7.28256 4.7672C7.2833 4.76646 7.28403 4.76573 7.28477 4.76499C7.2855 4.76426 7.28624 4.76352 7.28697 4.76278C7.28771 4.76205 7.28845 4.76131 7.28918 4.76057C7.28992 4.75984 7.29066 4.7591 7.29139 4.75836C7.29213 4.75762 7.29287 4.75689 7.29361 4.75615C7.29435 4.75541 7.29509 4.75467 7.29583 4.75393C7.29657 4.75319 7.29731 4.75245 7.29805 4.75171C7.29879 4.75097 7.29953 4.75023 7.30027 4.74949C7.30101 4.74875 7.30175 4.748 7.3025 4.74726C7.30324 4.74652 7.30398 4.74578 7.30472 4.74503C7.30547 4.74429 7.30621 4.74355 7.30695 4.7428C7.3077 4.74206 7.30844 4.74132 7.30919 4.74057C7.30993 4.73983 7.31067 4.73908 7.31142 4.73834C7.31217 4.73759 7.31291 4.73685 7.31366 4.7361C7.3144 4.73535 7.31515 4.73461 7.3159 4.73386C7.31664 4.73311 7.31739 4.73237 7.31814 4.73162C7.31888 4.73087 7.31963 4.73012 7.32038 4.72938C7.32113 4.72863 7.32188 4.72788 7.32263 4.72713C7.32338 4.72638 7.32412 4.72563 7.32487 4.72488C7.32562 4.72413 7.32637 4.72338 7.32712 4.72263C7.32787 4.72188 7.32862 4.72113 7.32938 4.72038C7.33013 4.71963 7.33088 4.71888 7.33163 4.71813C7.33238 4.71737 7.33313 4.71662 7.33389 4.71587C7.33464 4.71512 7.33539 4.71437 7.33614 4.71361C7.3369 4.71286 7.33765 4.71211 7.3384 4.71135C7.33916 4.7106 7.33991 4.70985 7.34066 4.70909C7.34142 4.70834 7.34217 4.70758 7.34293 4.70683C7.34368 4.70607 7.34444 4.70532 7.34519 4.70456C7.34595 4.70381 7.3467 4.70305 7.34746 4.7023C7.34821 4.70154 7.34897 4.70078 7.34973 4.70003C7.35048 4.69927 7.35124 4.69852 7.352 4.69776C7.35275 4.697 7.35351 4.69624 7.35427 4.69549C7.35503 4.69473 7.35578 4.69397 7.35654 4.69321C7.3573 4.69246 7.35806 4.6917 7.35882 4.69094C7.35957 4.69018 7.36033 4.68942 7.36109 4.68866C7.36185 4.6879 7.36261 4.68714 7.36337 4.68639C7.36413 4.68563 7.36489 4.68487 7.36565 4.68411C7.36641 4.68335 7.36717 4.68259 7.36793 4.68183C7.36869 4.68107 7.36945 4.6803 7.37021 4.67954C7.37097 4.67878 7.37173 4.67802 7.37249 4.67726C7.37325 4.6765 7.37402 4.67574 7.37478 4.67498C7.37554 4.67421 7.3763 4.67345 7.37706 4.67269C7.37783 4.67193 7.37859 4.67117 7.37935 4.6704C7.38011 4.66964 7.38087 4.66888 7.38164 4.66812C7.3824 4.66735 7.38316 4.66659 7.38393 4.66583C7.38469 4.66506 7.38545 4.6643 7.38622 4.66354C7.38698 4.66277 7.38774 4.66201 7.38851 4.66125C7.38927 4.66048 7.39004 4.65972 7.3908 4.65895C7.39156 4.65819 7.39233 4.65743 7.39309 4.65666C7.39386 4.6559 7.39462 4.65513 7.39539 4.65437C7.39615 4.6536 7.39692 4.65284 7.39768 4.65207C7.39845 4.65131 7.39921 4.65054 7.39998 4.64978C7.40074 4.64901 7.40151 4.64824 7.40227 4.64748C7.40304 4.64671 7.40381 4.64595 7.40457 4.64518C7.40534 4.64442 7.4061 4.64365 7.40687 4.64288C7.40764 4.64212 7.4084 4.64135 7.40917 4.64058C7.40993 4.63982 7.4107 4.63905 7.41147 4.63829C7.41223 4.63752 7.413 4.63675 7.41377 4.63599C7.41453 4.63522 7.4153 4.63445 7.41607 4.63368C7.41684 4.63292 7.4176 4.63215 7.41837 4.63138C7.41914 4.63062 7.4199 4.62985 7.42067 4.62908C7.42144 4.62831 7.42221 4.62755 7.42297 4.62678C7.42374 4.62601 7.42451 4.62524 7.42528 4.62448C7.42604 4.62371 7.42681 4.62294 7.42758 4.62217C7.42835 4.62141 7.42911 4.62064 7.42988 4.61987C7.43065 4.6191 7.43142 4.61833 7.43219 4.61757C7.43295 4.6168 7.43372 4.61603 7.43449 4.61526C7.43526 4.61449 7.43603 4.61373 7.43679 4.61296C7.43756 4.61219 7.43833 4.61142 7.4391 4.61065C7.43987 4.60988 7.44064 4.60912 7.4414 4.60835C7.44217 4.60758 7.44294 4.60681 7.44371 4.60604C7.44448 4.60527 7.44524 4.60451 7.44601 4.60374C7.44678 4.60297 7.44755 4.6022 7.44832 4.60143C7.44909 4.60066 7.44985 4.5999 7.45062 4.59913C7.45139 4.59836 7.45216 4.59759 7.45293 4.59682C7.4537 4.59605 7.45446 4.59529 7.45523 4.59452C7.456 4.59375 7.45677 4.59298 7.45754 4.59221C7.45831 4.59144 7.45907 4.59068 7.45984 4.58991C7.46061 4.58914 7.46138 4.58837 7.46215 4.5876C7.46292 4.58684 7.46368 4.58607 7.46445 4.5853C7.46522 4.58453 7.46599 4.58376 7.46676 4.58299C7.46752 4.58223 7.46829 4.58146 7.46906 4.58069C7.46983 4.57992 7.4706 4.57916 7.47136 4.57839C7.47213 4.57762 7.4729 4.57685 7.47367 4.57608C7.47443 4.57532 7.4752 4.57455 7.47597 4.57378C7.47674 4.57301 7.4775 4.57225 7.47827 4.57148C7.47904 4.57071 7.47981 4.56994 7.48057 4.56918C7.48134 4.56841 7.48211 4.56764 7.48287 4.56688C7.48364 4.56611 7.48441 4.56534 7.48518 4.56457C7.48594 4.56381 7.48671 4.56304 7.48748 4.56227C7.48824 4.56151 7.48901 4.56074 7.48978 4.55997C7.49054 4.55921 7.49131 4.55844 7.49207 4.55768C7.49284 4.55691 7.49361 4.55614 7.49437 4.55538C7.49514 4.55461 7.4959 4.55384 7.49667 4.55308C7.49744 4.55231 7.4982 4.55155 7.49897 4.55078C7.49973 4.55002 7.5005 4.54925 7.50126 4.54849C7.50203 4.54772 7.50279 4.54696 7.50356 4.54619C7.50432 4.54543 7.50509 4.54466 7.50585 4.5439C7.50662 4.54313 7.50738 4.54237 7.50815 4.5416C7.50891 4.54084 7.50967 4.54007 7.51044 4.53931C7.5112 4.53855 7.51197 4.53778 7.51273 4.53702C7.51349 4.53625 7.51426 4.53549 7.51502 4.53473C7.51578 4.53396 7.51655 4.5332 7.51731 4.53244C7.51807 4.53168 7.51884 4.53091 7.5196 4.53015C7.52036 4.52939 7.52112 4.52862 7.52189 4.52786C7.52265 4.5271 7.52341 4.52634 7.52417 4.52558C7.52493 4.52481 7.5257 4.52405 7.52646 4.52329C7.52722 4.52253 7.52798 4.52177 7.52874 4.52101C7.5295 4.52025 7.53026 4.51949 7.53102 4.51873C7.53178 4.51797 7.53254 4.5172 7.5333 4.51644C7.53406 4.51568 7.53482 4.51492 7.53558 4.51417C7.53634 4.51341 7.5371 4.51265 7.53786 4.51189C7.53862 4.51113 7.53938 4.51037 7.54014 4.50961C7.5409 4.50885 7.54165 4.50809 7.54241 4.50733C7.54317 4.50658 7.54393 4.50582 7.54469 4.50506C7.54544 4.5043 7.5462 4.50355 7.54696 4.50279C7.54772 4.50203 7.54847 4.50127 7.54923 4.50052C7.54999 4.49976 7.55074 4.499 7.5515 4.49825C7.55225 4.49749 7.55301 4.49674 7.55377 4.49598C7.55452 4.49523 7.55528 4.49447 7.55603 4.49372C7.55679 4.49296 7.55754 4.49221 7.5583 4.49145C7.55905 4.4907 7.5598 4.48994 7.56056 4.48919C7.56131 4.48844 7.56206 4.48768 7.56282 4.48693C7.56357 4.48618 7.56432 4.48542 7.56508 4.48467C7.56583 4.48392 7.56658 4.48317 7.56733 4.48241C7.56808 4.48166 7.56884 4.48091 7.56959 4.48016C7.57034 4.47941 7.57109 4.47866 7.57184 4.47791C7.57259 4.47716 7.57334 4.47641 7.57409 4.47566C7.57484 4.47491 7.57559 4.47416 7.57634 4.47341C7.57709 4.47266 7.57784 4.47191 7.57859 4.47116C7.57933 4.47041 7.58008 4.46966 7.58083 4.46892C7.58158 4.46817 7.58233 4.46742 7.58307 4.46667C7.58382 4.46593 7.58457 4.46518 7.58531 4.46443C7.58606 4.46369 7.5868 4.46294 7.58755 4.4622C7.5883 4.46145 7.58904 4.46071 7.58979 4.45996C7.59053 4.45922 7.59127 4.45847 7.59202 4.45773C7.59276 4.45698 7.59351 4.45624 7.59425 4.4555C7.59499 4.45475 7.59574 4.45401 7.59648 4.45327C7.59722 4.45252 7.59796 4.45178 7.5987 4.45104C7.59945 4.4503 7.60019 4.44956 7.60093 4.44882C7.60167 4.44808 7.60241 4.44734 7.60315 4.4466C7.60389 4.44586 7.60463 4.44512 7.60537 4.44438C7.60611 4.44364 7.60685 4.4429 7.60758 4.44216C7.60832 4.44142 7.60906 4.44068 7.6098 4.43995C7.61054 4.43921 7.61127 4.43847 7.61201 4.43774C7.61274 4.437 7.61348 4.43626 7.61422 4.43553C7.61495 4.43479 7.61569 4.43406 7.61642 4.43332C7.61716 4.43259 7.61789 4.43185 7.61862 4.43112C7.61936 4.43039 7.62009 4.42965 7.62082 4.42892C7.62156 4.42819 7.62229 4.42745 7.62302 4.42672C7.62375 4.42599 7.62449 4.42526 7.62522 4.42453C7.62595 4.4238 7.62668 4.42307 7.62741 4.42234C7.62814 4.42161 7.62887 4.42088 7.6296 4.42015C7.63032 4.41942 7.63105 4.41869 7.63178 4.41796C7.63251 4.41724 7.63324 4.41651 7.63396 4.41578C7.63469 4.41505 7.63542 4.41433 7.63614 4.4136C7.63687 4.41288 7.63759 4.41215 7.63832 4.41143C7.63904 4.4107 7.63977 4.40998 7.64049 4.40925C7.64122 4.40853 7.64194 4.4078 7.64266 4.40708C7.64338 4.40636 7.64411 4.40564 7.64483 4.40492C7.64555 4.40419 7.64627 4.40347 7.64699 4.40275C7.64771 4.40203 7.64843 4.40131 7.64915 4.40059C7.64987 4.39987 7.65059 4.39915 7.65131 4.39843C7.65203 4.39772 7.65275 4.397 7.65346 4.39628C7.65418 4.39556 7.6549 4.39485 7.65561 4.39413C7.65633 4.39341 7.65704 4.3927 7.65776 4.39198C7.65847 4.39127 7.65919 4.39055 7.6599 4.38984C7.66062 4.38913 7.66133 4.38841 7.66204 4.3877C7.66276 4.38699 7.66347 4.38628 7.66418 4.38556C7.66489 4.38485 7.6656 4.38414 7.66631 4.38343C7.66702 4.38272 7.66773 4.38201 7.66844 4.3813C7.66915 4.38059 7.66986 4.37988 7.67057 4.37918C7.67127 4.37847 7.67198 4.37776 7.67269 4.37706C7.67339 4.37635 7.6741 4.37564 7.67481 4.37494C7.67551 4.37423 7.67622 4.37353 7.67692 4.37282C7.67762 4.37212 7.67833 4.37142 7.67903 4.37071C7.67973 4.37001 7.68043 4.36931 7.68114 4.36861C7.68184 4.3679 7.68254 4.3672 7.68324 4.3665C7.68394 4.3658 7.68464 4.3651 7.68534 4.3644C7.68604 4.36371 7.68673 4.36301 7.68743 4.36231C7.68813 4.36161 7.68883 4.36092 7.68952 4.36022C7.69022 4.35952 7.69092 4.35883 7.69161 4.35813C7.6923 4.35744 7.693 4.35674 7.69369 4.35605C7.69439 4.35536 7.69508 4.35466 7.69577 4.35397C7.69646 4.35328 7.69715 4.35259 7.69785 4.3519C7.69854 4.35121 7.69923 4.35052 7.69992 4.34983C7.70061 4.34914 7.70129 4.34845 7.70198 4.34776C7.70267 4.34707 7.70336 4.34638 7.70404 4.3457C7.70473 4.34501 7.70542 4.34433 7.7061 4.34364C7.70679 4.34296 7.70747 4.34227 7.70815 4.34159C7.70884 4.3409 7.70952 4.34022 7.7102 4.33954C7.71089 4.33886 7.71157 4.33817 7.71225 4.33749C7.71293 4.33681 7.71361 4.33613 7.71429 4.33545C7.71497 4.33477 7.71564 4.3341 7.71632 4.33342C7.717 4.33274 7.71768 4.33206 7.71835 4.33139C7.71903 4.33071 7.71971 4.33004 7.72038 4.32936C7.72105 4.32869 7.72173 4.32801 7.7224 4.32734C7.72307 4.32667 7.72375 4.32599 7.72442 4.32532C7.72509 4.32465 7.72576 4.32398 7.72643 4.32331C7.7271 4.32264 7.72777 4.32197 7.72844 4.3213C7.72911 4.32063 7.72978 4.31997 7.73044 4.3193C7.73111 4.31863 7.73177 4.31797 7.73244 4.3173C7.73311 4.31663 7.73377 4.31597 7.73443 4.31531C7.7351 4.31464 7.73576 4.31398 7.73642 4.31332C7.73708 4.31266 7.73775 4.31199 7.73841 4.31133C7.73907 4.31067 7.73973 4.31001 7.74038 4.30936C7.74104 4.3087 7.7417 4.30804 7.74236 4.30738C7.74302 4.30672 7.74367 4.30607 7.74433 4.30541C7.74498 4.30476 7.74564 4.3041 7.74629 4.30345C7.74694 4.3028 7.7476 4.30214 7.74825 4.30149C7.7489 4.30084 7.74955 4.30019 7.7502 4.29954C7.75085 4.29889 7.7515 4.29824 7.75215 4.29759C7.7528 4.29694 7.75345 4.29629 7.75409 4.29565C7.75474 4.295 7.75539 4.29435 7.75603 4.29371C7.75668 4.29306 7.75732 4.29242 7.75796 4.29177C7.75861 4.29113 7.75925 4.29049 7.75989 4.28985C7.76053 4.28921 7.76117 4.28857 7.76181 4.28793C7.76245 4.28729 7.76309 4.28665 7.76373 4.28601C7.76437 4.28537 7.76501 4.28473 7.76564 4.2841C7.76628 4.28346 7.76691 4.28283 7.76755 4.28219C7.76818 4.28156 7.76882 4.28092 7.76945 4.28029C7.77008 4.27966 7.77071 4.27903 7.77134 4.2784C7.77197 4.27777 7.7726 4.27714 7.77323 4.27651C7.77386 4.27588 7.77449 4.27525 7.77512 4.27462C7.77574 4.274 7.77637 4.27337 7.77699 4.27275C7.77762 4.27212 7.77824 4.2715 7.77887 4.27087C7.77949 4.27025 7.78011 4.26963 7.78073 4.26901C7.78135 4.26839 7.78197 4.26777 7.78259 4.26715C7.78321 4.26653 7.78383 4.26591 7.78445 4.26529C7.78506 4.26467 7.78568 4.26406 7.7863 4.26344C7.78691 4.26283 7.78753 4.26221 7.78814 4.2616C7.78875 4.26099 7.78937 4.26037 7.78998 4.25976C7.79059 4.25915 7.7912 4.25854 7.79181 4.25793C7.79242 4.25732 7.79303 4.25671 7.79363 4.2561C7.79424 4.2555 7.79485 4.25489 7.79545 4.25429C7.79606 4.25368 7.79666 4.25308 7.79727 4.25247C7.79787 4.25187 7.79847 4.25127 7.79907 4.25066C7.79967 4.25006 7.80027 4.24946 7.80087 4.24886C7.80147 4.24826 7.80207 4.24767 7.80267 4.24707C7.80327 4.24647 7.80386 4.24588 7.80446 4.24528C7.80505 4.24468 7.80565 4.24409 7.80624 4.2435C7.80683 4.2429 7.80743 4.24231 7.80802 4.24172C7.80861 4.24113 7.8092 4.24054 7.80979 4.23995C7.81037 4.23936 7.81096 4.23877 7.81155 4.23819C7.81214 4.2376 7.81272 4.23702 7.81331 4.23643C7.81389 4.23585 7.81447 4.23526 7.81506 4.23468C7.81564 4.2341 7.81622 4.23352 7.8168 4.23294C7.81738 4.23236 7.81796 4.23178 7.81854 4.2312C7.81912 4.23062 7.81969 4.23004 7.82027 4.22947C7.82085 4.22889 7.82142 4.22832 7.82199 4.22774C7.82257 4.22717 7.82314 4.2266 7.82371 4.22602C7.82428 4.22545 7.82485 4.22488 7.82542 4.22431C7.82599 4.22374 7.82656 4.22318 7.82713 4.22261C7.8277 4.22204 7.82826 4.22148 7.82883 4.22091C7.82939 4.22035 7.82995 4.21978 7.83052 4.21922C7.83108 4.21866 7.83164 4.2181 7.8322 4.21754C7.83276 4.21698 7.83332 4.21642 7.83388 4.21586C7.83444 4.2153 7.83499 4.21474 7.83555 4.21419C7.8361 4.21363 7.83666 4.21308 7.83721 4.21252C7.83777 4.21197 7.83832 4.21142 7.83887 4.21087C7.83942 4.21032 7.83997 4.20977 7.84052 4.20922C7.84107 4.20867 7.84161 4.20812 7.84216 4.20758C7.84271 4.20703 7.84325 4.20648 7.8438 4.20594C7.84434 4.2054 7.84488 4.20485 7.84542 4.20431C7.84597 4.20377 7.84651 4.20323 7.84705 4.20269C7.84759 4.20215 7.84812 4.20161 7.84866 4.20108C7.8492 4.20054 7.84973 4.2 7.85027 4.19947C7.8508 4.19894 7.85133 4.1984 7.85187 4.19787C7.8524 4.19734 7.85293 4.19681 7.85346 4.19628C7.85399 4.19575 7.85452 4.19522 7.85504 4.19469C7.85557 4.19417 7.8561 4.19364 7.85662 4.19312C7.85715 4.19259 7.85767 4.19207 7.85819 4.19154C7.85871 4.19102 7.85923 4.1905 7.85975 4.18998C7.86027 4.18946 7.86079 4.18894 7.86131 4.18843C7.86183 4.18791 7.86234 4.18739 7.86286 4.18688C7.86337 4.18636 7.86388 4.18585 7.8644 4.18534C7.86491 4.18483 7.86542 4.18432 7.86593 4.18381C7.86644 4.1833 7.86695 4.18279 7.86745 4.18228C7.86796 4.18177 7.86847 4.18127 7.86897 4.18076C7.86948 4.18026 7.86998 4.17976 7.87048 4.17926C7.87098 4.17875 7.87148 4.17825 7.87198 4.17775C7.87248 4.17725 7.87298 4.17676 7.87348 4.17626C7.87397 4.17576 7.87447 4.17527 7.87496 4.17477C7.87546 4.17428 7.87595 4.17379 7.87644 4.17329C7.87693 4.1728 7.87742 4.17231 7.87791 4.17182C7.8784 4.17134 7.87889 4.17085 7.87937 4.17036C7.87986 4.16988 7.88034 4.16939 7.88083 4.16891C7.88131 4.16842 7.88179 4.16794 7.88227 4.16746C7.88275 4.16698 7.88323 4.1665 7.88371 4.16602C7.88419 4.16554 7.88467 4.16507 7.88514 4.16459C7.88562 4.16412 7.88609 4.16364 7.88656 4.16317C7.88704 4.1627 7.88751 4.16223 7.88798 4.16176C7.88845 4.16129 7.88892 4.16082 7.88938 4.16035C7.88985 4.15988 7.89032 4.15942 7.89078 4.15895C7.89125 4.15849 7.89171 4.15803 7.89217 4.15756C7.89263 4.1571 7.89309 4.15664 7.89355 4.15618C7.89401 4.15572 7.89447 4.15527 7.89492 4.15481C7.89538 4.15435 7.89584 4.1539 7.89629 4.15345C7.89674 4.15299 7.89719 4.15254 7.89764 4.15209C7.89809 4.15164 7.89854 4.15119 7.89899 4.15074C7.89944 4.15029 7.89989 4.14985 7.90033 4.1494C7.90078 4.14896 7.90122 4.14852 7.90166 4.14807C7.9021 4.14763 7.90254 4.14719 7.90298 4.14675C7.90342 4.14631 7.90386 4.14587 7.9043 4.14544C7.90473 4.145 7.90517 4.14457 7.9056 4.14413C7.90603 4.1437 7.90647 4.14327 7.9069 4.14284C7.90733 4.14241 7.90776 4.14198 7.90818 4.14155C7.90861 4.14112 7.90904 4.1407 7.90946 4.14027C7.90989 4.13985 7.91031 4.13943 7.91073 4.139C7.91115 4.13858 7.91157 4.13816 7.91199 4.13774C7.91241 4.13732 7.91283 4.13691 7.91324 4.13649C7.91366 4.13608 7.91407 4.13566 7.91449 4.13525C7.9149 4.13484 7.91531 4.13442 7.91572 4.13401C7.91613 4.1336 7.91654 4.1332 7.91694 4.13279C7.91735 4.13238 7.91776 4.13198 7.91816 4.13157C7.91856 4.13117 7.91897 4.13077 7.91937 4.13037C7.91977 4.12997 7.92017 4.12957 7.92056 4.12917C7.92096 4.12877 7.92136 4.12838 7.92175 4.12798C7.92215 4.12759 7.92254 4.12719 7.92293 4.1268C7.92332 4.12641 7.92371 4.12602 7.9241 4.12563C7.92449 4.12524 7.92488 4.12486 7.92526 4.12447C7.92565 4.12408 7.92603 4.1237 7.92641 4.12332C7.9268 4.12294 7.92718 4.12256 7.92756 4.12218C7.92794 4.1218 7.92831 4.12142 7.92869 4.12104C7.92907 4.12067 7.92944 4.12029 7.92981 4.11992C7.93019 4.11955 7.93056 4.11918 7.93093 4.11881C7.9313 4.11844 7.93167 4.11807 7.93203 4.1177C7.9324 4.11733 7.93276 4.11697 7.93313 4.11661C7.93349 4.11624 7.93385 4.11588 7.93421 4.11552C7.93457 4.11516 7.93493 4.1148 7.93529 4.11444C7.93565 4.11409 7.936 4.11373 7.93635 4.11338C7.93671 4.11302 7.93706 4.11267 7.93741 4.11232C7.93776 4.11197 7.93811 4.11162 7.93846 4.11127C7.93881 4.11093 7.93915 4.11058 7.9395 4.11024C7.93984 4.10989 7.94018 4.10955 7.94052 4.10921C7.94086 4.10887 7.9412 4.10853 7.94154 4.10819C7.94188 4.10785 7.94221 4.10752 7.94255 4.10718C7.94288 4.10685 7.94321 4.10652 7.94355 4.10619C7.94388 4.10586 7.94421 4.10553 7.94453 4.1052C7.94486 4.10487 7.94519 4.10455 7.94551 4.10422C7.94584 4.1039 7.94616 4.10357 7.94648 4.10325C7.9468 4.10293 7.94712 4.10261 7.94744 4.10229C7.94776 4.10198 7.94807 4.10166 7.94839 4.10135C7.9487 4.10103 7.94901 4.10072 7.94932 4.10041C7.94963 4.1001 7.94994 4.09979 7.95025 4.09948C7.95056 4.09917 7.95086 4.09887 7.95117 4.09856C7.95147 4.09826 7.95177 4.09796 7.95208 4.09766C7.95238 4.09736 7.95267 4.09706 7.95297 4.09676C7.95327 4.09646 7.95356 4.09617 7.95386 4.09587C7.95415 4.09558 7.95444 4.09529 7.95473 4.095C7.95502 4.09471 7.95531 4.09442 7.9556 4.09413C7.95589 4.09384 7.95617 4.09356 7.95646 4.09328C7.95674 4.09299 7.95702 4.09271 7.9573 4.09243C7.95758 4.09215 7.95786 4.09187 7.95814 4.0916C7.95841 4.09132 7.95869 4.09105 7.95896 4.09077C7.95923 4.0905 7.9595 4.09023 7.95977 4.08996C7.96004 4.08969 7.96031 4.08942 7.96058 4.08916C7.96084 4.08889 7.9611 4.08863 7.96137 4.08836C7.96163 4.0881 7.96189 4.08784 7.96215 4.08758C7.96241 4.08732 7.96266 4.08707 7.96292 4.08681C7.96317 4.08656 7.96343 4.0863 7.96368 4.08605C7.96393 4.0858 7.96418 4.08555 7.96443 4.0853C7.96468 4.08506 7.96492 4.08481 7.96517 4.08457C7.96541 4.08432 7.96565 4.08408 7.96589 4.08384C7.96613 4.0836 7.96637 4.08336 7.96661 4.08312C7.96685 4.08288 7.96708 4.08265 7.96732 4.08242C7.96755 4.08218 7.96778 4.08195 7.96801 4.08172C7.96824 4.08149 7.96847 4.08126 7.96869 4.08104C7.96892 4.08081 7.96914 4.08059 7.96937 4.08036C7.96959 4.08014 7.96981 4.07992 7.97003 4.0797C7.97025 4.07948 7.97046 4.07927 7.97068 4.07905C7.97089 4.07884 7.97111 4.07862 7.97132 4.07841C7.97153 4.0782 7.97174 4.07799 7.97195 4.07779C7.97215 4.07758 7.97236 4.07737 7.97256 4.07717C7.97277 4.07697 7.97297 4.07676 7.97317 4.07656C7.97337 4.07636 7.97357 4.07617 7.97376 4.07597C7.97396 4.07577 7.97415 4.07558 7.97434 4.07539C7.97454 4.07519 7.97473 4.075 7.97492 4.07482C7.9751 4.07463 7.97529 4.07444 7.97548 4.07426C7.97566 4.07407 7.97584 4.07389 7.97602 4.07371C7.97621 4.07353 7.97638 4.07335 7.97656 4.07317C7.97674 4.07299 7.97691 4.07282 7.97709 4.07264C7.97726 4.07247 7.97743 4.0723 7.9776 4.07213C7.97777 4.07196 7.97794 4.07179 7.9781 4.07163C7.97827 4.07146 7.97843 4.0713 7.97859 4.07114C7.97875 4.07098 7.97891 4.07082 7.97907 4.07066C7.97923 4.0705 7.97939 4.07035 7.97954 4.07019C7.97969 4.07004 7.97984 4.06989 7.97999 4.06974C7.98014 4.06959 7.98029 4.06944 7.98044 4.06929C7.98058 4.06915 7.98073 4.069 7.98087 4.06886C7.98101 4.06872 7.98115 4.06858 7.98129 4.06844C7.98143 4.0683 7.98156 4.06817 7.9817 4.06803C7.98183 4.0679 7.98196 4.06777 7.98209 4.06764C7.98222 4.06751 7.98235 4.06738 7.98248 4.06725C7.9826 4.06713 7.98273 4.067 7.98285 4.06688C7.98297 4.06676 7.98309 4.06664 7.98321 4.06652C7.98333 4.0664 7.98344 4.06629 7.98356 4.06617C7.98367 4.06606 7.98378 4.06595 7.98389 4.06584C7.984 4.06573 7.98411 4.06562 7.98422 4.06552C7.98432 4.06541 7.98443 4.06531 7.98453 4.0652C7.98463 4.0651 7.98473 4.065 7.98483 4.06491C7.98492 4.06481 7.98502 4.06471 7.98511 4.06462C7.98521 4.06453 7.9853 4.06443 7.98539 4.06434C7.98548 4.06426 7.98556 4.06417 7.98565 4.06408C7.98573 4.064 7.98582 4.06391 7.9859 4.06383C7.98598 4.06375 7.98606 4.06367 7.98613 4.0636C7.98621 4.06352 7.98629 4.06344 7.98636 4.06337C7.98643 4.0633 7.9865 4.06323 7.98657 4.06316C7.98664 4.06309 7.98671 4.06302 7.98677 4.06296C7.98684 4.0629 7.9869 4.06283 7.98696 4.06277C7.98702 4.06271 7.98708 4.06265 7.98713 4.0626C7.98719 4.06254 7.98724 4.06249 7.98729 4.06244C7.98735 4.06239 7.9874 4.06234 7.98744 4.06229C7.98749 4.06224 7.98754 4.0622 7.98758 4.06215C7.98762 4.06211 7.98766 4.06207 7.9877 4.06203C7.98774 4.06199 7.98778 4.06195 7.98781 4.06192C7.98785 4.06188 7.98788 4.06185 7.98791 4.06182C7.98794 4.06179 7.98797 4.06176 7.98799 4.06174C7.98802 4.06171 7.98804 4.06169 7.98807 4.06166C7.98809 4.06164 7.98811 4.06162 7.98813 4.06161C7.98814 4.06159 7.98816 4.06157 7.98817 4.06156C7.98818 4.06155 7.9882 4.06154 7.9882 4.06153C7.98821 4.06152 7.98822 4.06151 7.98822 4.06151C7.98823 4.0615 7.98823 4.0615 7.45791 3.53116ZM6.04305 3.88539L3.25184 6.67671L4.31248 7.73739L7.10369 4.94607L6.04305 3.88539ZM3.25184 6.67671C3.10581 6.82274 2.96399 6.96375 2.85492 7.09223C2.74017 7.2274 2.61832 7.39721 2.54655 7.61813L3.97312 8.08163C3.95933 8.12408 3.94388 8.12725 3.9984 8.06302C4.05861 7.99209 4.14895 7.90092 4.31248 7.73739L3.25184 6.67671ZM2.54656 7.61812C2.44662 7.92571 2.44658 8.25712 2.54659 8.56482L3.9731 8.10114C3.97106 8.09487 3.97104 8.08803 3.97312 8.08164L2.54656 7.61812ZM2.54656 8.56473C2.61833 8.78565 2.74017 8.95545 2.85492 9.09063C2.96399 9.21911 3.10581 9.36012 3.25184 9.50615L4.31248 8.44547C4.14895 8.28194 4.05862 8.19077 3.99841 8.11985C3.94389 8.05563 3.95935 8.0588 3.97313 8.10123L2.54656 8.56473ZM3.25184 9.50615L6.04305 12.2975L7.10369 11.2368L4.31248 8.44547L3.25184 9.50615ZM6.04305 12.2975C6.18908 12.4435 6.33008 12.5853 6.45856 12.6944C6.59373 12.8092 6.76354 12.931 6.98446 13.0028L7.44791 11.5761C7.49036 11.5899 7.49353 11.6054 7.4293 11.5509C7.35838 11.4907 7.26722 11.4003 7.10369 11.2368L6.04305 12.2975ZM6.98437 13.0028C7.292 13.1027 7.62343 13.1027 7.93107 13.0028L7.46745 11.5762C7.46114 11.5782 7.45431 11.5782 7.44799 11.5762L6.98437 13.0028ZM7.93098 13.0028C8.1519 12.931 8.32171 12.8092 8.45688 12.6944C8.58536 12.5853 8.72636 12.4435 8.87239 12.2975L7.81175 11.2368C7.64822 11.4003 7.55706 11.4907 7.48614 11.5509C7.42191 11.6054 7.42508 11.5899 7.46753 11.5762L7.93098 13.0028Z"
                fill="#929292"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.6604 10.4079C12.9816 9.88759 13.7807 9.08594 13.8204 9.08594C13.8602 9.08594 14.6593 9.88759 14.9805 10.4079C15.2421 10.8316 15.3831 11.1599 15.3831 11.6287C15.3831 12.5298 14.6797 13.2531 13.8204 13.2531C12.9612 13.2531 12.2578 12.5298 12.2578 11.6287C12.2578 11.1599 12.3988 10.8316 12.6604 10.4079Z"
                fill="#929292"
            />
            <path d="M3.05859 7.94531H12.1213L7.58995 12.4768L3.05859 7.94531Z" fill="#929292" />
        </svg>
    ),
    LeftSide: ({ className, ...props }: IconProps) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('', className)}
            {...props}
        >
            <path
                d="M7.5 3H7.51M7.5 12H7.51M7.5 21H7.51M16.5 3H16.51M16.5 12H16.51M16.5 21H16.51M12 3H12.01M12 12H12.01M12 21H12.01M12 16.5H12.01M12 7.5H12.01M21 3H21.01M21 12H21.01M21 21H21.01M21 16.5H21.01M21 7.5H21.01M3 21V3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    RightSide: ({ className, ...props }: IconProps) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('', className)}
            {...props}
        >
            <path
                d="M7.5 3H7.51M7.5 12H7.51M7.5 21H7.51M16.5 3H16.51M16.5 12H16.51M16.5 21H16.51M12 3H12.01M12 12H12.01M12 21H12.01M12 16.5H12.01M12 7.5H12.01M3 3H3.01M3 12H3.01M3 21H3.01M3 16.5H3.01M3 7.5H3.01M21 21V3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    TopSide: ({ className, ...props }: IconProps) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('', className)}
            {...props}
        >
            <path
                d="M3 21H3.01M3 12H3.01M3 16.5H3.01M3 7.5H3.01M7.5 21H7.51M7.5 12H7.51M16.5 21H16.51M16.5 12H16.51M12 21H12.01M12 12H12.01M12 16.5H12.01M12 7.5H12.01M21 21H21.01M21 12H21.01M21 16.5H21.01M21 7.5H21.01M21 3H3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    BottomSide: ({ className, ...props }: IconProps) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('', className)}
            {...props}
        >
            <path
                d="M3 3H3.01M3 12H3.01M3 7.5H3.01M3 16.5H3.01M7.5 3H7.51M7.5 12H7.51M16.5 3H16.51M16.5 12H16.51M12 3H12.01M12 12H12.01M12 7.5H12.01M12 16.5H12.01M21 3H21.01M21 12H21.01M21 7.5H21.01M21 16.5H21.01M21 21H3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    CornerTopRight: ({ className, ...props }: IconProps) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('', className)}
            {...props}
        >
            <path
                d="M3.75 3.75H10.65C14.0103 3.75 15.6905 3.75 16.9739 4.40396C18.1029 4.9792 19.0208 5.89708 19.596 7.02606C20.25 8.30953 20.25 9.98969 20.25 13.35V20.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    CornerBottomRight: ({ className, ...props }: IconProps) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('', className)}
            {...props}
        >
            <path
                d="M3.75 20.25H10.65C14.0103 20.25 15.6905 20.25 16.9739 19.596C18.1029 19.0208 19.0208 18.1029 19.596 16.9739C20.25 15.6905 20.25 14.0103 20.25 10.65V3.75"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
    CornerBottomLeft: ({ className, ...props }: IconProps) => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('', className)}
            {...props}
        >
            <path
                d="M20.25 20.25H13.35C9.98969 20.25 8.30953 20.25 7.02606 19.596C5.89708 19.0208 4.9792 18.1029 4.40396 16.9739C3.75 15.6905 3.75 14.0103 3.75 10.65V3.75"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    ),
} satisfies { [key: string]: React.FC<IconProps> };
