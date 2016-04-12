{
    'targets': [
        {
            'target_name': 'addon',
            'sources': [
                'addon.cc',
                'routines/level1/asum.cc',
                'routines/level1/axpy.cc',
                'routines/level1/copy.cc'
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
