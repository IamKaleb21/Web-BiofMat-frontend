// src/components/SectionToggle.jsx
function SectionToggle({ activeSection, onToggle }) {
    return (
        <div className="flex justify-end mb-6 transition-all duration-300">
            <button
                onClick={() => onToggle('about')}
                className={`flex items-center text-lg font-semibold ${activeSection === 'about'
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-gray-400'
                    } mr-3`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    className={`mr-2 transition-colors duration-300 ${activeSection === 'about' ? 'text-primary' : 'text-gray-400'
                        }`}
                >
                    <path
                        d="M7.50498 10.0976V7.49739M7.50498 4.89716H7.51148M2.20924 5.30026C2.11439 4.87287 2.12896 4.42843 2.25158 4.00817C2.3742 3.58791 2.6009 3.20542 2.91067 2.89617C3.22045 2.58693 3.60326 2.36093 4.02361 2.23914C4.44397 2.11736 4.88825 2.10372 5.31528 2.19949C5.55032 1.83176 5.87411 1.52913 6.25681 1.3195C6.63951 1.10988 7.0688 1 7.50511 1C7.94142 1 8.37071 1.10988 8.75341 1.3195C9.1361 1.52913 9.4599 1.83176 9.69493 2.19949C10.1226 2.1033 10.5677 2.11688 10.9887 2.23896C11.4097 2.36104 11.793 2.58767 12.103 2.89775C12.413 3.20784 12.6395 3.59131 12.7615 4.0125C12.8836 4.43369 12.8971 4.87892 12.801 5.30676C13.1686 5.54189 13.4711 5.86581 13.6806 6.24866C13.8902 6.63151 14 7.06097 14 7.49745C14 7.93393 13.8902 8.36339 13.6806 8.74624C13.4711 9.12909 13.1686 9.45301 12.801 9.68814C12.8967 10.1153 12.8831 10.5598 12.7613 10.9803C12.6396 11.4008 12.4137 11.7838 12.1046 12.0937C11.7955 12.4036 11.4131 12.6304 10.993 12.7531C10.5729 12.8757 10.1287 12.8903 9.70143 12.7954C9.4667 13.1646 9.14266 13.4685 8.7593 13.679C8.37595 13.8896 7.94569 14 7.50836 14C7.07102 14 6.64076 13.8896 6.25741 13.679C5.87406 13.4685 5.55001 13.1646 5.31528 12.7954C4.88825 12.8912 4.44397 12.8775 4.02361 12.7558C3.60326 12.634 3.22045 12.408 2.91067 12.0987C2.6009 11.7895 2.3742 11.407 2.25158 10.9867C2.12896 10.5665 2.11439 10.122 2.20924 9.69464C1.83882 9.46013 1.53371 9.13571 1.32229 8.75155C1.11087 8.36739 1 7.93598 1 7.49745C1 7.05892 1.11087 6.62751 1.32229 6.24335C1.53371 5.8592 1.83882 5.53477 2.20924 5.30026Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                Acerca de la clase
            </button>
            <button
                onClick={() => onToggle('modules')}
                className={`flex items-center text-lg font-semibold ${activeSection === 'modules'
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-gray-400'
                    }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    className={`mr-2 transition-colors duration-300 ${activeSection === 'modules' ? 'text-primary' : 'text-gray-400'
                        }`}
                >
                    <path
                        d="M3.97774 1V14M1.74444 1H6.21105C6.62219 1 6.95549 1.32335 6.95549 1.72222V13.2778C6.95549 13.6766 6.62219 14 6.21105 14H1.74444C1.3333 14 1 13.6766 1 13.2778V1.72222C1 1.32335 1.3333 1 1.74444 1ZM13.9534 12.4833C14.1023 12.8444 13.8789 13.2778 13.5067 13.4222L12.0923 13.9278C11.7201 14.0722 11.2734 13.8556 11.1245 13.4944L7.03011 2.51667C6.88122 2.15556 7.10455 1.72222 7.47677 1.57778L8.8912 1.07222C9.26342 0.927778 9.71008 1.14444 9.85897 1.50556L13.9534 12.4833Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                Módulos y Clases
            </button>
        </div>
    );
}

export default SectionToggle;
