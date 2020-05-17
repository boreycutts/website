import WebComponent from '/components/webComponent.js';

export default class SectionExperience extends WebComponent {
    experienceList = [
        {
            company: 'Acumen Solutions',
            title: 'Software Engineer',
            dateRange: '09/19 - Present',
            contentList: [
                'Contributed to the front/back end design and development of multiple web applications',
                'Developed a Navigation Library that enables URL routing in Lightning Web Components',
                'Developed a custom LWC Datatable Extension which supports more column data types',
                'Designed a Workshop to help introduce developers to basic Machine Learning concepts',
            ]
        },
        {
            company: 'Automated Packaging Systems',
            title: 'Software Engineer Co-op',
            dateRange: '08/17 - 08/18 (2 Semesters)',
            contentList: [
                'Integrated NOR Flash Filesystem into MQX RTOS',
                'Created Python scripts to automate unit testing and Git repository migration',
                'Contributed to the migration of HMI OS from Android to Yocto Linux',
                'Made modifications to the Linux kernel and U-Boot bootloader to decrease boot time',
                'Modified drivers and device tree files to add support for custom hardware',
                'Established Git repositories for new projects and build environments',
                'Created documentation for multiple projects and processes',
            ]
        },
        {
            company: 'Regal Beloit',
            title: 'Electronics Engineer Co-op',
            dateRange: '08/15 - 04/17 (3 Semesters)',
            contentList: [
                'Assisted Engineering team with development of electronics for motor products',
                'Designed, assembled, tested and debugged prototype circuits',
                'Troubleshot MSP430 Microcontroller software',
                'Contributed to experimental signal processing technology',
                'Contributed to development of energy efficient pool pump algorithm',
                'Interfaced with customers to determine needs',
            ]
        },
    ];
}