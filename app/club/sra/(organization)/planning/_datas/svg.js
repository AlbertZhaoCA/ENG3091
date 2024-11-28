import { htmlsToRF } from "@/utils/helpers";

export const svgArray = htmlsToRF([
  <svg key={"wechat"} viewBox="0 0 300 300" height="1em" width="1em">
    <path
      fill="#2DC100"
      d="M300 255c0 24.854-20.147 45-45 45H45c-24.854 0-45-20.146-45-45V45C0 20.147 20.147 0 45 0h210c24.853 0 45 20.147 45 45v210z"
    />
    <g fill="#FFF">
      <path d="M200.803 111.88c-24.213 1.265-45.268 8.605-62.362 25.188-17.271 16.754-25.155 37.284-23 62.734-9.464-1.172-18.084-2.462-26.753-3.192-2.994-.252-6.547.106-9.083 1.537-8.418 4.75-16.488 10.113-26.053 16.092 1.755-7.938 2.891-14.889 4.902-21.575 1.479-4.914.794-7.649-3.733-10.849-29.066-20.521-41.318-51.232-32.149-82.85 8.483-29.25 29.315-46.989 57.621-56.236 38.635-12.62 82.054.253 105.547 30.927 8.485 11.08 13.688 23.516 15.063 38.224zm-111.437-9.852c.223-5.783-4.788-10.993-10.74-11.167-6.094-.179-11.106 4.478-11.284 10.483-.18 6.086 4.475 10.963 10.613 11.119 6.085.154 11.186-4.509 11.411-10.435zm58.141-11.171c-5.974.11-11.022 5.198-10.916 11.004.109 6.018 5.061 10.726 11.204 10.652 6.159-.074 10.83-4.832 10.772-10.977-.051-6.032-4.981-10.79-11.06-10.679z" />
      <path d="M255.201 262.83c-7.667-3.414-14.7-8.536-22.188-9.318-7.459-.779-15.3 3.524-23.104 4.322-23.771 2.432-45.067-4.193-62.627-20.432-33.397-30.89-28.625-78.254 10.014-103.568 34.341-22.498 84.704-14.998 108.916 16.219 21.129 27.24 18.646 63.4-7.148 86.284-7.464 6.623-10.15 12.073-5.361 20.804.884 1.612.985 3.653 1.498 5.689zm-87.274-84.499c4.881.005 8.9-3.815 9.085-8.636.195-5.104-3.91-9.385-9.021-9.406-5.06-.023-9.299 4.318-9.123 9.346.166 4.804 4.213 8.69 9.059 8.696zm56.261-18.022c-4.736-.033-8.76 3.844-8.953 8.629-.205 5.117 3.772 9.319 8.836 9.332 4.898.016 8.768-3.688 8.946-8.562.19-5.129-3.789-9.364-8.829-9.399z" />
    </g>
  </svg>,
  <svg
    key={"qq"}
    width="1em"
    height="1em"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.7035 9.84752L18.5148 9.90648L18.5148 9.90649L18.5147 9.90651L18.5146 9.90655L18.514 9.90673L18.5095 9.9081L18.4891 9.91427C18.4705 9.91985 18.4419 9.9283 18.4038 9.93922C18.3275 9.96108 18.213 9.99282 18.0639 10.0313C17.7657 10.1082 17.3292 10.212 16.7825 10.3172C15.6887 10.5278 14.1587 10.7433 12.415 10.7641H12.3985C10.6558 10.7537 9.12676 10.5383 8.03362 10.3253C7.48739 10.2189 7.05132 10.1133 6.75343 10.0349C6.60453 9.99566 6.49025 9.96325 6.41412 9.94094C6.37605 9.92978 6.34753 9.92115 6.32899 9.91546L6.30873 9.90918L6.30433 9.90779L6.30379 9.90762L6.30364 9.90757L6.30357 9.90755L6.30356 9.90755L6.17474 9.86629C6.17318 9.80253 6.17218 9.74223 6.17218 9.69191C6.17218 5.85643 7.97465 2 12.4389 2C16.8822 2 18.7056 5.85643 18.7056 9.69191C18.7056 9.73726 18.7048 9.79073 18.7035 9.84752ZM17.239 13.7108C18.0943 13.5421 18.9333 13.3372 19.7082 13.1054L19.7349 13.0974C19.9203 13.5999 20.0904 14.0977 20.2356 14.5334C21.0949 17.2581 20.8015 18.3898 20.6548 18.4318C20.1937 18.4946 18.8942 16.3778 18.8942 16.3778C18.8942 18.5156 16.945 21.8271 12.5018 21.848H12.376C7.93273 21.8271 5.98355 18.5365 5.98355 16.3778C5.98355 16.3778 4.66314 18.4946 4.22301 18.4318C4.01342 18.4108 3.72 17.279 4.57931 14.5334C4.72454 14.0977 4.89461 13.5999 5.07996 13.0974L5.10677 13.1054C5.883 13.3376 6.72588 13.5428 7.58503 13.7117C7.50319 14.3972 7.47155 15.1921 7.53453 16.1053C7.72316 19.1653 9.54658 21.0935 12.3551 21.1145H12.4808C15.2893 21.0935 17.1127 19.1653 17.3014 16.1053C17.3486 15.1917 17.313 14.3965 17.239 13.7108ZM12.4179 8.14097C14.4509 8.14097 16.0648 8.53919 16.2324 8.89549C16.2324 8.91645 16.2324 8.93741 16.2115 8.93741C16.2115 8.95836 16.2115 8.97932 16.1905 9.00028C16.0648 9.18891 14.2413 10.174 12.397 10.174H12.376C10.5316 10.174 8.7082 9.18891 8.58245 9.00028C8.56149 8.97933 8.56149 8.95837 8.56149 8.93741V8.93741C8.56149 8.93741 8.58245 8.91645 8.58245 8.89549C8.75012 8.53919 10.3849 8.14097 12.397 8.14097H12.4179ZM10.8251 7.65891C10.2173 7.67987 9.6933 6.98823 9.67234 6.12892C9.63042 5.24865 10.1125 4.51509 10.6993 4.49413C11.3071 4.47317 11.8101 5.16481 11.8521 6.02412C11.894 6.9044 11.4329 7.63795 10.8251 7.65891ZM15.1426 6.12892C15.1007 7.00919 14.5977 7.70083 13.9899 7.65891C13.3821 7.63795 12.921 6.9044 12.9629 6.02412C13.0048 5.14385 13.5078 4.45221 14.1156 4.49413C14.7234 4.51509 15.1845 5.24865 15.1426 6.12892Z"
        fill="#20cf6c"
      />{" "}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.418 11.2641C15.981 11.2221 18.6637 10.3838 18.6637 10.3838L19.5649 12.6264C17.3223 13.2971 14.5348 13.7372 12.418 13.7163H12.397C12.0258 13.72 11.6322 13.7092 11.2233 13.6853V16.378C9.84001 16.5667 8.45673 16.2942 8.45673 16.2942V13.3627C7.35087 13.176 6.24478 12.9239 5.25003 12.6264L6.15126 10.3838C6.15126 10.4047 8.83399 11.2431 12.397 11.2641H12.418Z"
        fill="#20cf6c"
      />{" "}
      <path
        d="M12.397 21.7642C10.6574 21.7642 9.06451 21.1774 8.01657 20.318C7.4926 20.4648 6.82192 20.7163 6.40274 21.0306C6.04644 21.3031 6.08836 21.5756 6.15123 21.6804C6.44466 22.1624 11.0556 21.9947 12.397 21.848V21.7642Z"
        stroke="#20cf6c"
      />{" "}
      <path
        d="M12.397 21.7642C14.1366 21.7642 15.7294 21.1774 16.7774 20.318C17.3013 20.4648 17.972 20.7163 18.3912 21.0306C18.7475 21.3031 18.7056 21.5756 18.6427 21.6804C18.3493 22.1624 13.7383 21.9947 12.397 21.848V21.7642Z"
        stroke="#20cf6c"
      />{" "}
      <path
        d="M11.5586 6.14986C11.5796 6.50616 11.391 6.79958 11.1395 6.8415C10.8879 6.88342 10.6364 6.63191 10.6155 6.27561C10.5945 5.91931 10.7832 5.62589 11.0347 5.58397C11.3071 5.54205 11.5377 5.79356 11.5586 6.14986ZM13.2353 6.25465C13.2982 6.14986 13.6545 5.64685 14.409 5.83547C14.5977 5.87739 14.7025 5.96123 14.7234 5.98219C14.7444 6.0241 14.7653 6.08698 14.7234 6.17082C14.6605 6.31753 14.5558 6.31753 14.4719 6.29657C14.43 6.27561 13.906 5.91931 13.424 6.44328C13.3821 6.4852 13.3401 6.4852 13.2773 6.44328C13.2144 6.40137 13.1934 6.31753 13.2353 6.25465Z"
        fill="#20cf6c"
      />{" "}
    </g>
  </svg>,
]);
