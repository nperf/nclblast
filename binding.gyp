{
    'targets': [
        {
            'target_name': 'addon',
            'sources': [
                'addon.cc',
                'routines/level1/asum.cc'
            ],
            'include_dirs': [
                'lib'
            ],
            'libraries': [
                '-lclblas'
            ]
        }
    ]
}
