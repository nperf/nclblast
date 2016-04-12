{
    'targets': [
        {
            'target_name': 'addon',
            'sources': [
                'addon.cc',
                'routines/level1/asum.cc',
                'routines/level1/axpy.cc',
                'routines/level1/copy.cc',
                'routines/level1/dot.cc',
                'routines/level1/iamax.cc',
                'routines/level1/nrm2.cc'
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
