import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('color-blindness-devtool-logo')
export class Logo extends LitElement {
  override render() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="344"
        height="24"
        viewBox="0 0 344 24"
        fill="currentColor"
        role="img"
        aria-label="Color Blindness Devtool"
        part="img"
      >
        <path
          d="M15.95 3.02C16.47 3.28 16.77 3.69 16.85 4.25C16.95 4.81 16.81 5.32 16.43 5.78C16.17 6.14 15.83 6.34 15.41 6.38C15.01 6.42 14.6 6.34 14.18 6.14C13.7 5.92 13.19 5.75 12.65 5.63C12.13 5.51 11.58 5.45 11 5.45C9.92 5.45 8.95 5.62 8.09 5.96C7.25 6.3 6.53 6.79 5.93 7.43C5.33 8.05 4.87 8.79 4.55 9.65C4.25 10.51 4.1 11.46 4.1 12.5C4.1 13.72 4.27 14.78 4.61 15.68C4.97 16.58 5.46 17.33 6.08 17.93C6.7 18.53 7.43 18.98 8.27 19.28C9.11 19.56 10.02 19.7 11 19.7C11.54 19.7 12.08 19.65 12.62 19.55C13.16 19.45 13.68 19.27 14.18 19.01C14.6 18.81 15.01 18.74 15.41 18.8C15.83 18.86 16.18 19.07 16.46 19.43C16.86 19.93 17 20.45 16.88 20.99C16.78 21.51 16.48 21.89 15.98 22.13C15.46 22.39 14.92 22.61 14.36 22.79C13.82 22.95 13.27 23.07 12.71 23.15C12.15 23.25 11.58 23.3 11 23.3C9.56 23.3 8.19 23.07 6.89 22.61C5.61 22.15 4.46 21.47 3.44 20.57C2.44 19.67 1.65 18.55 1.07 17.21C0.49 15.85 0.2 14.28 0.2 12.5C0.2 10.96 0.46 9.54 0.98 8.24C1.52 6.94 2.27 5.82 3.23 4.88C4.21 3.92 5.36 3.18 6.68 2.66C8 2.12 9.44 1.85 11 1.85C11.88 1.85 12.74 1.95 13.58 2.15C14.42 2.35 15.21 2.64 15.95 3.02ZM35.3286 14.99C35.3286 16.63 34.9586 18.08 34.2186 19.34C33.4986 20.58 32.5186 21.55 31.2786 22.25C30.0586 22.95 28.6886 23.3 27.1686 23.3C25.6486 23.3 24.2686 22.95 23.0286 22.25C21.8086 21.55 20.8286 20.58 20.0886 19.34C19.3686 18.08 19.0086 16.63 19.0086 14.99C19.0086 13.35 19.3686 11.91 20.0886 10.67C20.8286 9.41 21.8086 8.43 23.0286 7.73C24.2686 7.01 25.6486 6.65 27.1686 6.65C28.6886 6.65 30.0586 7.01 31.2786 7.73C32.5186 8.43 33.4986 9.41 34.2186 10.67C34.9586 11.91 35.3286 13.35 35.3286 14.99ZM31.7286 14.99C31.7286 13.97 31.5186 13.09 31.0986 12.35C30.6986 11.59 30.1486 11 29.4486 10.58C28.7686 10.16 28.0086 9.95 27.1686 9.95C26.3286 9.95 25.5586 10.16 24.8586 10.58C24.1786 11 23.6286 11.59 23.2086 12.35C22.8086 13.09 22.6086 13.97 22.6086 14.99C22.6086 15.99 22.8086 16.87 23.2086 17.63C23.6286 18.37 24.1786 18.95 24.8586 19.37C25.5586 19.79 26.3286 20 27.1686 20C28.0086 20 28.7686 19.79 29.4486 19.37C30.1486 18.95 30.6986 18.37 31.0986 17.63C31.5186 16.87 31.7286 15.99 31.7286 14.99ZM42.3793 21.17C42.3793 21.69 42.1993 22.13 41.8393 22.49C41.4993 22.83 41.0693 23 40.5493 23C40.0493 23 39.6293 22.83 39.2893 22.49C38.9493 22.13 38.7793 21.69 38.7793 21.17V2.63C38.7793 2.11 38.9493 1.68 39.2893 1.34C39.6493 0.979999 40.0893 0.8 40.6093 0.8C41.1293 0.8 41.5493 0.979999 41.8693 1.34C42.2093 1.68 42.3793 2.11 42.3793 2.63V21.17ZM61.8423 14.99C61.8423 16.63 61.4723 18.08 60.7323 19.34C60.0123 20.58 59.0323 21.55 57.7923 22.25C56.5723 22.95 55.2023 23.3 53.6823 23.3C52.1623 23.3 50.7823 22.95 49.5423 22.25C48.3223 21.55 47.3423 20.58 46.6023 19.34C45.8823 18.08 45.5223 16.63 45.5223 14.99C45.5223 13.35 45.8823 11.91 46.6023 10.67C47.3423 9.41 48.3223 8.43 49.5423 7.73C50.7823 7.01 52.1623 6.65 53.6823 6.65C55.2023 6.65 56.5723 7.01 57.7923 7.73C59.0323 8.43 60.0123 9.41 60.7323 10.67C61.4723 11.91 61.8423 13.35 61.8423 14.99ZM58.2423 14.99C58.2423 13.97 58.0323 13.09 57.6123 12.35C57.2123 11.59 56.6623 11 55.9623 10.58C55.2823 10.16 54.5223 9.95 53.6823 9.95C52.8423 9.95 52.0723 10.16 51.3723 10.58C50.6923 11 50.1423 11.59 49.7223 12.35C49.3223 13.09 49.1223 13.97 49.1223 14.99C49.1223 15.99 49.3223 16.87 49.7223 17.63C50.1423 18.37 50.6923 18.95 51.3723 19.37C52.0723 19.79 52.8423 20 53.6823 20C54.5223 20 55.2823 19.79 55.9623 19.37C56.6623 18.95 57.2123 18.37 57.6123 17.63C58.0323 16.87 58.2423 15.99 58.2423 14.99ZM66.793 23C66.273 23 65.843 22.83 65.503 22.49C65.163 22.13 64.993 21.69 64.993 21.17V8.78C64.993 8.26 65.163 7.83 65.503 7.49C65.843 7.13 66.273 6.95 66.793 6.95C67.313 6.95 67.743 7.13 68.083 7.49C68.423 7.83 68.593 8.26 68.593 8.78V11.6L68.383 9.59C68.603 9.11 68.883 8.69 69.223 8.33C69.583 7.95 69.983 7.64 70.423 7.4C70.863 7.14 71.333 6.95 71.833 6.83C72.333 6.71 72.833 6.65 73.333 6.65C73.933 6.65 74.433 6.82 74.833 7.16C75.253 7.5 75.463 7.9 75.463 8.36C75.463 9.02 75.293 9.5 74.953 9.8C74.613 10.08 74.243 10.22 73.843 10.22C73.463 10.22 73.113 10.15 72.793 10.01C72.493 9.87 72.143 9.8 71.743 9.8C71.383 9.8 71.013 9.89 70.633 10.07C70.273 10.23 69.933 10.49 69.613 10.85C69.313 11.21 69.063 11.66 68.863 12.2C68.683 12.72 68.593 13.34 68.593 14.06V21.17C68.593 21.69 68.423 22.13 68.083 22.49C67.743 22.83 67.313 23 66.793 23ZM96.099 2C98.019 2 99.449 2.45 100.389 3.35C101.329 4.25 101.799 5.58 101.799 7.34C101.799 8.28 101.569 9.11 101.109 9.83C100.649 10.53 99.969 11.08 99.069 11.48C98.169 11.86 97.059 12.05 95.739 12.05L95.859 10.7C96.479 10.7 97.189 10.79 97.989 10.97C98.789 11.13 99.559 11.43 100.299 11.87C101.059 12.29 101.679 12.89 102.159 13.67C102.659 14.43 102.909 15.41 102.909 16.61C102.909 17.93 102.689 19.01 102.249 19.85C101.829 20.69 101.269 21.34 100.569 21.8C99.869 22.26 99.119 22.58 98.319 22.76C97.519 22.92 96.749 23 96.009 23H88.539C88.019 23 87.579 22.83 87.219 22.49C86.879 22.13 86.709 21.69 86.709 21.17V3.83C86.709 3.31 86.879 2.88 87.219 2.54C87.579 2.18 88.019 2 88.539 2H96.099ZM95.559 5.54H90.219L90.609 5.06V10.49L90.249 10.22H95.649C96.229 10.22 96.749 10.03 97.209 9.65C97.669 9.27 97.899 8.72 97.899 8C97.899 7.14 97.679 6.52 97.239 6.14C96.819 5.74 96.259 5.54 95.559 5.54ZM95.799 13.76H90.339L90.609 13.52V19.85L90.309 19.55H96.009C96.929 19.55 97.659 19.31 98.199 18.83C98.739 18.33 99.009 17.59 99.009 16.61C99.009 15.71 98.829 15.06 98.469 14.66C98.109 14.26 97.679 14.01 97.179 13.91C96.679 13.81 96.219 13.76 95.799 13.76ZM109.879 21.17C109.879 21.69 109.699 22.13 109.339 22.49C108.999 22.83 108.569 23 108.049 23C107.549 23 107.129 22.83 106.789 22.49C106.449 22.13 106.279 21.69 106.279 21.17V2.63C106.279 2.11 106.449 1.68 106.789 1.34C107.149 0.979999 107.589 0.8 108.109 0.8C108.629 0.8 109.049 0.979999 109.369 1.34C109.709 1.68 109.879 2.11 109.879 2.63V21.17ZM117.455 21.17C117.455 21.69 117.285 22.13 116.945 22.49C116.605 22.83 116.175 23 115.655 23C115.135 23 114.705 22.83 114.365 22.49C114.025 22.13 113.855 21.69 113.855 21.17V8.78C113.855 8.26 114.025 7.83 114.365 7.49C114.705 7.13 115.135 6.95 115.655 6.95C116.175 6.95 116.605 7.13 116.945 7.49C117.285 7.83 117.455 8.26 117.455 8.78V21.17ZM115.625 5C114.945 5 114.465 4.89 114.185 4.67C113.905 4.45 113.765 4.06 113.765 3.5V2.93C113.765 2.35 113.915 1.96 114.215 1.76C114.535 1.54 115.015 1.43 115.655 1.43C116.355 1.43 116.845 1.54 117.125 1.76C117.405 1.98 117.545 2.37 117.545 2.93V3.5C117.545 4.08 117.395 4.48 117.095 4.7C116.795 4.9 116.305 5 115.625 5ZM129.735 6.65C131.215 6.65 132.335 6.96 133.095 7.58C133.875 8.2 134.405 9.03 134.685 10.07C134.985 11.09 135.135 12.23 135.135 13.49V21.17C135.135 21.69 134.965 22.13 134.625 22.49C134.285 22.83 133.855 23 133.335 23C132.815 23 132.385 22.83 132.045 22.49C131.705 22.13 131.535 21.69 131.535 21.17V13.49C131.535 12.83 131.445 12.24 131.265 11.72C131.105 11.18 130.805 10.75 130.365 10.43C129.925 10.11 129.295 9.95 128.475 9.95C127.675 9.95 126.995 10.11 126.435 10.43C125.895 10.75 125.475 11.18 125.175 11.72C124.895 12.24 124.755 12.83 124.755 13.49V21.17C124.755 21.69 124.585 22.13 124.245 22.49C123.905 22.83 123.475 23 122.955 23C122.435 23 122.005 22.83 121.665 22.49C121.325 22.13 121.155 21.69 121.155 21.17V8.78C121.155 8.26 121.325 7.83 121.665 7.49C122.005 7.13 122.435 6.95 122.955 6.95C123.475 6.95 123.905 7.13 124.245 7.49C124.585 7.83 124.755 8.26 124.755 8.78V10.07L124.305 9.98C124.485 9.64 124.745 9.28 125.085 8.9C125.425 8.5 125.825 8.13 126.285 7.79C126.745 7.45 127.265 7.18 127.845 6.98C128.425 6.76 129.055 6.65 129.735 6.65ZM152.166 0.8C152.686 0.8 153.116 0.969999 153.456 1.31C153.796 1.65 153.966 2.09 153.966 2.63V21.17C153.966 21.69 153.796 22.13 153.456 22.49C153.116 22.83 152.686 23 152.166 23C151.646 23 151.216 22.83 150.876 22.49C150.536 22.13 150.366 21.69 150.366 21.17V19.7L151.026 19.97C151.026 20.23 150.886 20.55 150.606 20.93C150.326 21.29 149.946 21.65 149.466 22.01C148.986 22.37 148.416 22.68 147.756 22.94C147.116 23.18 146.416 23.3 145.656 23.3C144.276 23.3 143.026 22.95 141.906 22.25C140.786 21.53 139.896 20.55 139.236 19.31C138.596 18.05 138.276 16.61 138.276 14.99C138.276 13.35 138.596 11.91 139.236 10.67C139.896 9.41 140.776 8.43 141.876 7.73C142.976 7.01 144.196 6.65 145.536 6.65C146.396 6.65 147.186 6.78 147.906 7.04C148.626 7.3 149.246 7.63 149.766 8.03C150.306 8.43 150.716 8.84 150.996 9.26C151.296 9.66 151.446 10 151.446 10.28L150.366 10.67V2.63C150.366 2.11 150.536 1.68 150.876 1.34C151.216 0.979999 151.646 0.8 152.166 0.8ZM146.106 20C146.986 20 147.756 19.78 148.416 19.34C149.076 18.9 149.586 18.3 149.946 17.54C150.326 16.78 150.516 15.93 150.516 14.99C150.516 14.03 150.326 13.17 149.946 12.41C149.586 11.65 149.076 11.05 148.416 10.61C147.756 10.17 146.986 9.95 146.106 9.95C145.246 9.95 144.486 10.17 143.826 10.61C143.166 11.05 142.646 11.65 142.266 12.41C141.906 13.17 141.726 14.03 141.726 14.99C141.726 15.93 141.906 16.78 142.266 17.54C142.646 18.3 143.166 18.9 143.826 19.34C144.486 19.78 145.246 20 146.106 20ZM166.444 6.65C167.924 6.65 169.044 6.96 169.804 7.58C170.584 8.2 171.114 9.03 171.394 10.07C171.694 11.09 171.844 12.23 171.844 13.49V21.17C171.844 21.69 171.674 22.13 171.334 22.49C170.994 22.83 170.564 23 170.044 23C169.524 23 169.094 22.83 168.754 22.49C168.414 22.13 168.244 21.69 168.244 21.17V13.49C168.244 12.83 168.154 12.24 167.974 11.72C167.814 11.18 167.514 10.75 167.074 10.43C166.634 10.11 166.004 9.95 165.184 9.95C164.384 9.95 163.704 10.11 163.144 10.43C162.604 10.75 162.184 11.18 161.884 11.72C161.604 12.24 161.464 12.83 161.464 13.49V21.17C161.464 21.69 161.294 22.13 160.954 22.49C160.614 22.83 160.184 23 159.664 23C159.144 23 158.714 22.83 158.374 22.49C158.034 22.13 157.864 21.69 157.864 21.17V8.78C157.864 8.26 158.034 7.83 158.374 7.49C158.714 7.13 159.144 6.95 159.664 6.95C160.184 6.95 160.614 7.13 160.954 7.49C161.294 7.83 161.464 8.26 161.464 8.78V10.07L161.014 9.98C161.194 9.64 161.454 9.28 161.794 8.9C162.134 8.5 162.534 8.13 162.994 7.79C163.454 7.45 163.974 7.18 164.554 6.98C165.134 6.76 165.764 6.65 166.444 6.65ZM183.295 23.3C181.595 23.3 180.115 22.95 178.855 22.25C177.615 21.53 176.655 20.56 175.975 19.34C175.315 18.12 174.985 16.74 174.985 15.2C174.985 13.4 175.345 11.87 176.065 10.61C176.805 9.33 177.765 8.35 178.945 7.67C180.125 6.99 181.375 6.65 182.695 6.65C183.715 6.65 184.675 6.86 185.575 7.28C186.495 7.7 187.305 8.28 188.005 9.02C188.705 9.74 189.255 10.58 189.655 11.54C190.075 12.5 190.285 13.52 190.285 14.6C190.265 15.08 190.075 15.47 189.715 15.77C189.355 16.07 188.935 16.22 188.455 16.22H176.995L176.095 13.22H187.105L186.445 13.82V13.01C186.405 12.43 186.195 11.91 185.815 11.45C185.455 10.99 184.995 10.63 184.435 10.37C183.895 10.09 183.315 9.95 182.695 9.95C182.095 9.95 181.535 10.03 181.015 10.19C180.495 10.35 180.045 10.62 179.665 11C179.285 11.38 178.985 11.89 178.765 12.53C178.545 13.17 178.435 13.98 178.435 14.96C178.435 16.04 178.655 16.96 179.095 17.72C179.555 18.46 180.135 19.03 180.835 19.43C181.555 19.81 182.315 20 183.115 20C183.855 20 184.445 19.94 184.885 19.82C185.325 19.7 185.675 19.56 185.935 19.4C186.215 19.22 186.465 19.07 186.685 18.95C187.045 18.77 187.385 18.68 187.705 18.68C188.145 18.68 188.505 18.83 188.785 19.13C189.085 19.43 189.235 19.78 189.235 20.18C189.235 20.72 188.955 21.21 188.395 21.65C187.875 22.09 187.145 22.48 186.205 22.82C185.265 23.14 184.295 23.3 183.295 23.3ZM192.5 20.51C192.3 20.23 192.21 19.87 192.23 19.43C192.25 18.99 192.51 18.61 193.01 18.29C193.33 18.09 193.67 18.01 194.03 18.05C194.39 18.07 194.74 18.25 195.08 18.59C195.66 19.17 196.27 19.62 196.91 19.94C197.55 20.26 198.35 20.42 199.31 20.42C199.61 20.4 199.94 20.36 200.3 20.3C200.66 20.22 200.97 20.06 201.23 19.82C201.51 19.56 201.65 19.17 201.65 18.65C201.65 18.21 201.5 17.86 201.2 17.6C200.9 17.34 200.5 17.12 200 16.94C199.52 16.76 198.98 16.59 198.38 16.43C197.76 16.25 197.12 16.05 196.46 15.83C195.82 15.61 195.23 15.33 194.69 14.99C194.15 14.63 193.71 14.16 193.37 13.58C193.03 13 192.86 12.27 192.86 11.39C192.86 10.39 193.14 9.54 193.7 8.84C194.26 8.14 194.98 7.6 195.86 7.22C196.76 6.84 197.7 6.65 198.68 6.65C199.3 6.65 199.95 6.73 200.63 6.89C201.31 7.03 201.96 7.27 202.58 7.61C203.2 7.93 203.72 8.36 204.14 8.9C204.36 9.2 204.49 9.56 204.53 9.98C204.57 10.4 204.38 10.78 203.96 11.12C203.66 11.36 203.31 11.47 202.91 11.45C202.51 11.41 202.18 11.27 201.92 11.03C201.58 10.59 201.12 10.24 200.54 9.98C199.98 9.72 199.33 9.59 198.59 9.59C198.29 9.59 197.96 9.63 197.6 9.71C197.26 9.77 196.96 9.92 196.7 10.16C196.44 10.38 196.31 10.74 196.31 11.24C196.31 11.7 196.46 12.07 196.76 12.35C197.06 12.61 197.46 12.83 197.96 13.01C198.48 13.17 199.03 13.33 199.61 13.49C200.21 13.65 200.82 13.84 201.44 14.06C202.06 14.28 202.63 14.57 203.15 14.93C203.67 15.29 204.09 15.76 204.41 16.34C204.73 16.9 204.89 17.62 204.89 18.5C204.89 19.52 204.59 20.39 203.99 21.11C203.39 21.83 202.64 22.38 201.74 22.76C200.84 23.12 199.92 23.3 198.98 23.3C197.8 23.3 196.62 23.1 195.44 22.7C194.26 22.28 193.28 21.55 192.5 20.51ZM206.973 20.51C206.773 20.23 206.683 19.87 206.703 19.43C206.723 18.99 206.983 18.61 207.483 18.29C207.803 18.09 208.143 18.01 208.503 18.05C208.863 18.07 209.213 18.25 209.553 18.59C210.133 19.17 210.743 19.62 211.383 19.94C212.023 20.26 212.823 20.42 213.783 20.42C214.083 20.4 214.413 20.36 214.773 20.3C215.133 20.22 215.443 20.06 215.703 19.82C215.983 19.56 216.123 19.17 216.123 18.65C216.123 18.21 215.973 17.86 215.673 17.6C215.373 17.34 214.973 17.12 214.473 16.94C213.993 16.76 213.453 16.59 212.853 16.43C212.233 16.25 211.593 16.05 210.933 15.83C210.293 15.61 209.703 15.33 209.163 14.99C208.623 14.63 208.183 14.16 207.843 13.58C207.503 13 207.333 12.27 207.333 11.39C207.333 10.39 207.613 9.54 208.173 8.84C208.733 8.14 209.453 7.6 210.333 7.22C211.233 6.84 212.173 6.65 213.153 6.65C213.773 6.65 214.423 6.73 215.103 6.89C215.783 7.03 216.433 7.27 217.053 7.61C217.673 7.93 218.193 8.36 218.613 8.9C218.833 9.2 218.963 9.56 219.003 9.98C219.043 10.4 218.853 10.78 218.433 11.12C218.133 11.36 217.783 11.47 217.383 11.45C216.983 11.41 216.653 11.27 216.393 11.03C216.053 10.59 215.593 10.24 215.013 9.98C214.453 9.72 213.803 9.59 213.063 9.59C212.763 9.59 212.433 9.63 212.073 9.71C211.733 9.77 211.433 9.92 211.173 10.16C210.913 10.38 210.783 10.74 210.783 11.24C210.783 11.7 210.933 12.07 211.233 12.35C211.533 12.61 211.933 12.83 212.433 13.01C212.953 13.17 213.503 13.33 214.083 13.49C214.683 13.65 215.293 13.84 215.913 14.06C216.533 14.28 217.103 14.57 217.623 14.93C218.143 15.29 218.563 15.76 218.883 16.34C219.203 16.9 219.363 17.62 219.363 18.5C219.363 19.52 219.063 20.39 218.463 21.11C217.863 21.83 217.113 22.38 216.213 22.76C215.313 23.12 214.393 23.3 213.453 23.3C212.273 23.3 211.093 23.1 209.913 22.7C208.733 22.28 207.753 21.55 206.973 20.51ZM240.084 2C241.524 2 242.804 2.27 243.924 2.81C245.044 3.35 245.984 4.11 246.744 5.09C247.524 6.05 248.104 7.17 248.484 8.45C248.884 9.71 249.084 11.06 249.084 12.5C249.084 14.44 248.734 16.21 248.034 17.81C247.334 19.39 246.314 20.65 244.974 21.59C243.654 22.53 242.024 23 240.084 23H232.914C232.394 23 231.954 22.83 231.594 22.49C231.254 22.13 231.084 21.69 231.084 21.17V3.83C231.084 3.31 231.254 2.88 231.594 2.54C231.954 2.18 232.394 2 232.914 2H240.084ZM239.784 19.55C241.044 19.55 242.074 19.23 242.874 18.59C243.674 17.93 244.254 17.07 244.614 16.01C244.994 14.93 245.184 13.76 245.184 12.5C245.184 11.56 245.074 10.67 244.854 9.83C244.654 8.97 244.334 8.22 243.894 7.58C243.454 6.92 242.894 6.4 242.214 6.02C241.534 5.64 240.724 5.45 239.784 5.45H234.534L234.834 5.18V19.88L234.654 19.55H239.784ZM260.024 23.3C258.324 23.3 256.844 22.95 255.584 22.25C254.344 21.53 253.384 20.56 252.704 19.34C252.044 18.12 251.714 16.74 251.714 15.2C251.714 13.4 252.074 11.87 252.794 10.61C253.534 9.33 254.494 8.35 255.674 7.67C256.854 6.99 258.104 6.65 259.424 6.65C260.444 6.65 261.404 6.86 262.304 7.28C263.224 7.7 264.034 8.28 264.734 9.02C265.434 9.74 265.984 10.58 266.384 11.54C266.804 12.5 267.014 13.52 267.014 14.6C266.994 15.08 266.804 15.47 266.444 15.77C266.084 16.07 265.664 16.22 265.184 16.22H253.724L252.824 13.22H263.834L263.174 13.82V13.01C263.134 12.43 262.924 11.91 262.544 11.45C262.184 10.99 261.724 10.63 261.164 10.37C260.624 10.09 260.044 9.95 259.424 9.95C258.824 9.95 258.264 10.03 257.744 10.19C257.224 10.35 256.774 10.62 256.394 11C256.014 11.38 255.714 11.89 255.494 12.53C255.274 13.17 255.164 13.98 255.164 14.96C255.164 16.04 255.384 16.96 255.824 17.72C256.284 18.46 256.864 19.03 257.564 19.43C258.284 19.81 259.044 20 259.844 20C260.584 20 261.174 19.94 261.614 19.82C262.054 19.7 262.404 19.56 262.664 19.4C262.944 19.22 263.194 19.07 263.414 18.95C263.774 18.77 264.114 18.68 264.434 18.68C264.874 18.68 265.234 18.83 265.514 19.13C265.814 19.43 265.964 19.78 265.964 20.18C265.964 20.72 265.684 21.21 265.124 21.65C264.604 22.09 263.874 22.48 262.934 22.82C261.994 23.14 261.024 23.3 260.024 23.3ZM270.733 6.95C271.113 6.95 271.463 7.05 271.783 7.25C272.103 7.43 272.343 7.71 272.503 8.09L276.913 18.17L276.253 18.47L280.753 8.12C281.093 7.32 281.623 6.94 282.343 6.98C282.843 6.98 283.243 7.14 283.543 7.46C283.863 7.76 284.023 8.14 284.023 8.6C284.023 8.74 283.993 8.89 283.933 9.05C283.893 9.21 283.843 9.36 283.783 9.5L278.173 21.86C277.853 22.58 277.343 22.96 276.643 23C276.263 23.06 275.893 22.99 275.533 22.79C275.193 22.59 274.933 22.28 274.753 21.86L269.173 9.5C269.133 9.4 269.083 9.27 269.023 9.11C268.983 8.95 268.963 8.76 268.963 8.54C268.963 8.18 269.123 7.83 269.443 7.49C269.763 7.13 270.193 6.95 270.733 6.95ZM293.975 23C293.415 23 292.955 22.83 292.595 22.49C292.235 22.13 292.055 21.69 292.055 21.17V3.77H295.955V21.17C295.955 21.69 295.765 22.13 295.385 22.49C295.025 22.83 294.555 23 293.975 23ZM287.345 5.45C286.825 5.45 286.385 5.29 286.025 4.97C285.685 4.65 285.515 4.23 285.515 3.71C285.515 3.19 285.685 2.78 286.025 2.48C286.385 2.16 286.825 2 287.345 2H300.665C301.185 2 301.615 2.16 301.955 2.48C302.315 2.8 302.495 3.22 302.495 3.74C302.495 4.26 302.315 4.68 301.955 5C301.615 5.3 301.185 5.45 300.665 5.45H287.345ZM317.311 14.99C317.311 16.63 316.941 18.08 316.201 19.34C315.481 20.58 314.501 21.55 313.261 22.25C312.041 22.95 310.671 23.3 309.151 23.3C307.631 23.3 306.251 22.95 305.011 22.25C303.791 21.55 302.811 20.58 302.071 19.34C301.351 18.08 300.991 16.63 300.991 14.99C300.991 13.35 301.351 11.91 302.071 10.67C302.811 9.41 303.791 8.43 305.011 7.73C306.251 7.01 307.631 6.65 309.151 6.65C310.671 6.65 312.041 7.01 313.261 7.73C314.501 8.43 315.481 9.41 316.201 10.67C316.941 11.91 317.311 13.35 317.311 14.99ZM313.711 14.99C313.711 13.97 313.501 13.09 313.081 12.35C312.681 11.59 312.131 11 311.431 10.58C310.751 10.16 309.991 9.95 309.151 9.95C308.311 9.95 307.541 10.16 306.841 10.58C306.161 11 305.611 11.59 305.191 12.35C304.791 13.09 304.591 13.97 304.591 14.99C304.591 15.99 304.791 16.87 305.191 17.63C305.611 18.37 306.161 18.95 306.841 19.37C307.541 19.79 308.311 20 309.151 20C309.991 20 310.751 19.79 311.431 19.37C312.131 18.95 312.681 18.37 313.081 17.63C313.501 16.87 313.711 15.99 313.711 14.99ZM336.032 14.99C336.032 16.63 335.662 18.08 334.922 19.34C334.202 20.58 333.222 21.55 331.982 22.25C330.762 22.95 329.392 23.3 327.872 23.3C326.352 23.3 324.972 22.95 323.732 22.25C322.512 21.55 321.532 20.58 320.792 19.34C320.072 18.08 319.712 16.63 319.712 14.99C319.712 13.35 320.072 11.91 320.792 10.67C321.532 9.41 322.512 8.43 323.732 7.73C324.972 7.01 326.352 6.65 327.872 6.65C329.392 6.65 330.762 7.01 331.982 7.73C333.222 8.43 334.202 9.41 334.922 10.67C335.662 11.91 336.032 13.35 336.032 14.99ZM332.432 14.99C332.432 13.97 332.222 13.09 331.802 12.35C331.402 11.59 330.852 11 330.152 10.58C329.472 10.16 328.712 9.95 327.872 9.95C327.032 9.95 326.262 10.16 325.562 10.58C324.882 11 324.332 11.59 323.912 12.35C323.512 13.09 323.312 13.97 323.312 14.99C323.312 15.99 323.512 16.87 323.912 17.63C324.332 18.37 324.882 18.95 325.562 19.37C326.262 19.79 327.032 20 327.872 20C328.712 20 329.472 19.79 330.152 19.37C330.852 18.95 331.402 18.37 331.802 17.63C332.222 16.87 332.432 15.99 332.432 14.99ZM343.082 21.17C343.082 21.69 342.902 22.13 342.542 22.49C342.202 22.83 341.772 23 341.252 23C340.752 23 340.332 22.83 339.992 22.49C339.652 22.13 339.482 21.69 339.482 21.17V2.63C339.482 2.11 339.652 1.68 339.992 1.34C340.352 0.979999 340.792 0.8 341.312 0.8C341.832 0.8 342.252 0.979999 342.572 1.34C342.912 1.68 343.082 2.11 343.082 2.63V21.17Z"
        />
      </svg>
    `
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'color-blindness-devtool-logo': Logo
  }
}
