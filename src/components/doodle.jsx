import * as React from "react"
import { useColorMode } from "theme-ui"
import { Flex, Box } from "@theme-ui/components"

function withHook(Component) {
    return function WrappedComponent(props) {
        var colorMode = useColorMode()
        var isDark = colorMode === "dark"
        return <Component {...props} strokeColor={isDark ? "#fcba03" : "#fcba03"} />
    };
}

class Doodle extends React.Component {
    render() {
        return (
            <Flex sx={{ alignItems: "center" }}>
                <Box mx="auto">
                    <svg version="1.0" xmlnsXlink="http://www.w3.org/2000/svg"
                        width="350pt" height="285pt" viewBox="0 0 906.000000 739.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,739.000000) scale(0.100000,-0.100000)"
                            stroke={this.props.strokeColor} fill={this.props.strokeColor} strokeWidth="10">
                            <path d="M3965 7119 c-90 -9 -573 -128 -690 -170 -180 -63 -325 -147 -529
                            -307 -148 -116 -226 -196 -345 -357 -260 -348 -409 -614 -485 -869 -81 -270
                            -91 -325 -90 -521 0 -191 18 -344 55 -459 21 -67 80 -156 109 -163 10 -3 25
                            -25 35 -49 l17 -44 -70 -75 c-113 -121 -175 -226 -207 -352 -18 -70 -24 -212
                            -12 -292 l8 -54 -33 22 c-73 48 -237 137 -303 165 -94 39 -196 46 -243 16 -28
                            -17 -33 -25 -30 -53 3 -31 5 -32 68 -42 94 -16 120 -26 312 -124 95 -49 198
                            -96 228 -106 l55 -18 49 -101 c45 -95 56 -109 180 -232 171 -170 452 -383 599
                            -453 231 -111 334 -137 987 -247 106 -18 877 -31 960 -16 371 64 588 126 715
                            203 86 52 263 185 324 243 46 44 53 48 48 26 -3 -14 -9 -104 -13 -200 -11
                            -292 23 -468 169 -871 93 -256 112 -334 101 -407 -20 -137 -78 -268 -141 -321
                            -47 -38 -53 -51 -25 -51 13 0 14 -2 3 -9 -19 -12 -5 -31 24 -31 27 0 100 55
                            171 132 77 81 109 157 46 108 -14 -11 -27 -19 -29 -17 -1 2 6 30 18 63 26 75
                            35 205 20 284 -7 34 -52 171 -101 305 -144 396 -175 552 -167 850 6 215 18
                            294 52 346 100 153 254 611 263 782 4 81 6 87 26 87 31 0 109 52 170 113 159
                            159 236 436 165 587 -43 92 -116 148 -206 158 -82 9 -135 -38 -101 -90 8 -12
                            48 -36 89 -53 62 -26 77 -37 96 -70 32 -57 37 -109 19 -195 -32 -150 -126
                            -294 -233 -357 l-43 -25 -31 26 c-17 14 -35 26 -40 26 -5 0 0 24 11 53 11 28
                            26 81 35 117 16 72 20 200 6 200 -5 0 -17 -26 -26 -57 -17 -60 -145 -346 -151
                            -340 -2 2 7 37 21 77 40 118 57 216 54 322 -3 95 -2 98 24 118 21 16 27 30 27
                            58 l0 37 -67 1 c-55 0 -142 21 -463 113 -217 62 -458 132 -535 157 -157 50
                            -455 190 -588 277 -144 94 -479 417 -566 546 -60 88 -135 249 -165 355 -14 48
                            -26 94 -26 102 0 30 -32 12 -48 -26 -10 -24 -24 -40 -34 -40 -27 0 -40 -36
                            -45 -124 -6 -92 9 -178 63 -368 44 -156 85 -251 146 -346 l50 -77 -42 40 c-93
                            88 -192 264 -265 468 -36 100 -55 121 -55 60 1 -176 89 -408 201 -527 83 -89
                            184 -170 265 -212 38 -20 74 -40 81 -45 34 -29 14 23 -59 147 -45 77 -99 180
                            -121 229 -35 80 -127 378 -127 408 0 7 15 -16 34 -49 61 -115 123 -188 327
                            -390 216 -212 288 -267 475 -366 188 -100 320 -158 459 -202 223 -71 783 -225
                            868 -238 l77 -13 0 -56 c0 -104 -30 -231 -116 -488 -80 -244 -117 -392 -100
                            -408 4 -5 20 7 35 25 15 17 37 32 48 32 43 0 114 81 186 214 l38 71 -5 -75
                            c-7 -109 -123 -509 -181 -625 -70 -141 -168 -252 -321 -368 -71 -53 -158 -112
                            -194 -131 -85 -44 -264 -101 -365 -116 -44 -6 -126 -20 -183 -31 -82 -15 -147
                            -19 -315 -19 -280 0 -657 24 -777 49 -52 11 -174 31 -270 46 -284 43 -506 110
                            -659 197 -143 82 -495 368 -584 476 -48 56 -104 172 -148 302 -29 89 -31 101
                            -27 205 4 81 11 125 28 168 30 79 106 190 185 271 73 76 76 88 45 176 -12 34
                            -19 82 -20 127 l0 73 48 24 c77 40 163 104 310 233 393 344 635 619 762 866
                            53 104 64 157 32 157 -27 0 -41 -14 -142 -145 -51 -66 -118 -149 -148 -185
                            -77 -90 -852 -858 -852 -844 0 53 24 236 42 312 19 86 19 95 5 110 -37 36 -96
                            -35 -134 -160 -23 -78 -43 -253 -43 -383 l0 -120 -21 45 c-45 100 -53 160 -53
                            430 l-1 255 44 165 c72 274 115 379 254 620 116 203 300 462 406 573 76 80
                            248 221 356 294 137 92 304 162 503 212 399 100 434 106 622 105 204 -1 393
                            -26 595 -78 72 -19 163 -36 202 -40 87 -7 183 -42 268 -95 34 -22 121 -69 193
                            -105 101 -51 152 -84 224 -146 51 -44 149 -119 218 -167 140 -97 228 -182 303
                            -293 28 -41 84 -119 124 -173 40 -54 73 -102 73 -107 0 -5 35 -62 78 -127 111
                            -167 127 -198 157 -291 31 -97 41 -154 60 -359 7 -84 16 -157 19 -162 8 -13
                            35 -261 30 -275 -2 -6 -9 -76 -15 -156 -6 -80 -15 -185 -19 -235 -12 -136 -12
                            -390 1 -418 8 -19 6 -47 -11 -128 -20 -95 -21 -121 -15 -304 3 -110 11 -243
                            17 -295 5 -52 11 -122 12 -154 2 -34 8 -62 14 -64 17 -5 98 -263 122 -387 24
                            -125 26 -290 5 -350 -8 -21 -12 -41 -10 -44 11 -10 46 36 67 88 20 51 22 73
                            22 226 0 167 -1 173 -42 328 -23 86 -42 161 -42 166 0 4 109 87 243 184 285
                            208 429 327 482 396 l38 50 23 -62 c37 -102 172 -403 211 -470 50 -84 136
                            -207 166 -235 17 -16 34 -22 53 -20 25 3 29 8 32 38 2 19 -2 53 -8 74 -19 63
                            -216 489 -262 567 -49 83 -116 156 -147 161 -20 3 -19 8 28 125 103 254 170
                            373 212 373 25 0 35 -27 44 -115 7 -66 27 -129 46 -141 14 -8 59 26 165 126
                            116 109 196 160 309 196 97 31 168 36 191 13 42 -42 56 -230 28 -365 -34 -167
                            -89 -293 -239 -544 -107 -179 -131 -230 -114 -241 55 -33 259 205 374 436 102
                            206 141 364 132 544 -10 223 -79 320 -227 321 -171 0 -411 -130 -515 -281
                            l-30 -42 -7 63 c-8 70 -26 102 -79 138 -46 32 -114 26 -171 -14 -111 -78 -249
                            -480 -198 -575 6 -11 8 -24 4 -31 -4 -7 -12 -1 -21 16 -10 20 -21 26 -46 26
                            -37 0 -43 -3 -249 -166 -84 -66 -211 -165 -283 -219 -71 -55 -149 -117 -172
                            -138 l-42 -38 -5 33 c-12 77 -24 443 -19 569 5 131 5 137 -16 158 -12 12 -20
                            29 -17 39 16 52 46 370 57 587 10 217 10 282 -5 495 -9 135 -24 286 -32 335
                            -21 126 -67 270 -107 335 -18 30 -58 93 -87 140 -29 47 -72 119 -95 160 -22
                            41 -89 145 -147 230 -122 179 -216 275 -378 390 -58 41 -153 113 -212 160 -76
                            62 -131 97 -195 125 -48 21 -142 69 -208 106 -145 82 -231 116 -333 130 -42 6
                            -117 21 -167 34 -207 56 -639 102 -800 84z"/>
                            <path d="M975 4451 c-43 -26 -60 -48 -92 -116 -25 -54 -28 -70 -28 -172 0
                            -149 13 -165 42 -52 21 86 58 168 90 202 31 32 49 34 58 9 7 -23 -9 -206 -35
                            -410 -25 -189 -26 -304 -5 -322 13 -11 10 -18 -23 -54 -75 -82 -150 -205 -211
                            -348 -34 -78 -41 -108 -39 -145 3 -44 5 -48 31 -51 22 -3 36 5 61 32 59 62
                            266 429 282 498 5 21 0 32 -19 50 -19 18 -23 28 -16 40 14 25 36 144 63 338
                            33 237 40 354 26 413 -24 92 -111 134 -185 88z"/>
                            <path d="M566 4385 c-93 -33 -181 -174 -218 -352 -38 -178 -23 -442 37 -676
                            37 -147 63 -205 114 -258 64 -66 101 -66 67 -1 -17 33 -60 228 -82 372 -24
                            149 -23 430 0 534 23 105 50 175 86 225 35 47 65 53 117 21 35 -21 89 -107 99
                            -157 3 -18 12 -37 19 -43 40 -33 49 125 11 206 -29 62 -93 118 -151 133 -53
                            13 -51 13 -99 -4z"/>
                            <path d="M2537 4312 c-12 -13 -17 -34 -16 -68 1 -27 -3 -69 -10 -92 -19 -72 4
                            -151 55 -191 80 -63 187 32 186 164 -1 88 -41 143 -112 152 -26 4 -47 14 -59
                            29 -23 29 -23 29 -44 6z"/>
                            <path d="M4570 3921 c-13 -25 -13 -64 1 -94 9 -20 8 -30 -6 -51 -42 -63 -36
                            -148 13 -187 23 -18 36 -20 81 -16 31 3 66 14 80 25 57 42 79 125 51 192 -11
                            28 -88 90 -110 90 -6 0 -22 14 -37 30 -30 34 -58 38 -73 11z"/>
                            <path d="M3460 3313 c-64 -21 -93 -25 -193 -24 -117 0 -118 0 -115 -22 6 -40
                            78 -67 184 -67 52 0 112 6 140 15 27 8 57 15 66 15 10 0 43 -23 74 -51 31 -28
                            81 -63 111 -76 91 -42 213 -41 213 1 0 21 -41 52 -112 85 -36 17 -101 58 -143
                            91 -90 70 -107 72 -225 33z"/>
                            <path d="M697 2933 c-16 -16 -4 -63 31 -122 38 -65 422 -582 471 -634 56 -61
                            91 -56 91 15 0 50 -39 127 -146 285 -181 269 -354 463 -411 463 -16 0 -33 -3
                            -36 -7z"/>
                            <path d="M7755 2619 c-77 -85 -449 -679 -516 -823 -32 -70 -56 -152 -46 -162
                            13 -14 67 20 116 71 79 84 364 528 504 786 64 118 64 169 -3 169 -10 0 -35
                            -19 -55 -41z"/>
                            <path d="M6587 2294 c-3 -4 -2 -15 3 -25 6 -10 26 -72 45 -139 39 -137 50
                            -160 70 -160 46 0 -30 257 -92 313 -11 9 -22 14 -26 11z"/>
                            <path d="M6543 2073 c-4 -9 -1 -78 5 -152 21 -233 26 -458 13 -571 -25 -224
                            -72 -366 -232 -703 -49 -103 -89 -192 -89 -198 0 -19 20 -8 66 39 58 57 96
                            115 161 247 162 323 213 567 193 918 -11 191 -22 273 -51 370 -16 54 -24 67
                            -40 67 -11 0 -23 -8 -26 -17z"/>
                            <path d="M6043 1014 c-3 -8 -3 -50 1 -92 16 -207 18 -335 6 -511 -8 -120 -17
                            -191 -23 -191 -8 0 -8 -3 0 -11 18 -18 51 0 63 34 20 57 41 249 41 377 0 114
                            -6 165 -42 348 -12 61 -32 81 -46 46z"/>
                            <path d="M6160 238 c-23 -39 -25 -58 -6 -58 19 0 35 22 42 58 9 42 -10 42 -36
                            0z"/>
                        </g>
                    </svg>
                </Box>
            </Flex>
        );
    }
}

export default withHook(Doodle)