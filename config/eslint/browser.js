module.exports = {
  plugins: ['import', 'babel'],
  settings: {
    'import/resolver': {
      webpack: { config: 'webpack.config.prod.js' },
      node: {
        path: ['src', 'cypress'],
        moduleDirectory: ['node_modules', 'src', 'cypress'],
        extensions: ['.js', '.jsx'],
      },
    },
    'import/extensions': ['.js', '.jsx', '.sass', '.scss'],
  },
  globals: {
    ReactComponent: true,
    ReactElement: true,
    SyntheticEvent: true,
    SyntheticClipboardEvent: true,
    SyntheticCompositionEvent: true,
    SyntheticInputEvent: true,
    SyntheticUIEvent: true,
    SyntheticFocusEvent: true,
    SyntheticKeyboardEvent: true,
    SyntheticMouseEvent: true,
    SyntheticDragEvent: true,
    SyntheticWheelEvent: true,
    SyntheticTouchEvent: true,
    __DEVELOPMENT__: true,
    cy: true,
    Cypress: true,
  },
  rules: {
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          if: { after: false },
          for: { after: false },
          while: { after: false },
          catch: { after: false },
          switch: { after: false },
        },
      },
    ],
    // Import
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        'pathGroups': [
          {
            pattern: 'constants/**',
            group: 'builtin',
          },
        ],
      },
    ],
    'import/no-unresolved': ['error'],
    'import/named': ['error'],
    'import/default': ['error'],
    'import/namespace': ['error'],
    'import/export': ['error'],
    'import/first': ['error'],
    'import/no-duplicates': ['error'],
    'import/newline-after-import': ['error'],
    'import/extensions': ['error', { js: 'never', jsx: 'never', sass: 'never', scss: 'never' }],
  },
}
