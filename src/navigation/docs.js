export const navigation = [
  {
    title: 'Home',
    links: [{ title: 'index', href: '/' }],
  },
  {
    title: 'QuickStarts',
    links: [
      { title: 'index', href: '/docs/quickstarts' },
      {
        title: 'JS QuickStart (node.js)',
        href: '/docs/quickstarts/js-quickstart',
      },
      {
        title: 'Golem in a Browser',
        href: '/docs/quickstarts/golem-in-a-browser',
      },
      {
        title: '"no-code" app deployment',
        href: '/docs/quickstarts/no-code-app-deployment',
      },
    ],
  },
  {
    title: 'Create on Golem',
    links: [
      { title: 'index', href: '/docs/creators' },
      {
        title: 'JavaScript',
        children: [
          { title: 'index', href: '/docs/creators/javascript' },
          {
            title: 'QuickStarts',
            href: '/docs/creators/javascript/quickstarts',
            children: [
              {
                title: 'index',
                href: '/docs/creators/javascript/quickstarts',
              },
              {
                title: 'Golem in Node.js',
                href: '/docs/creators/javascript/quickstarts/quickstart',
              },
              {
                title: 'Golem in a browser',
                href: '/docs/creators/javascript/quickstarts/golem-in-a-browser',
              },
            ],
          },
          {
            title: 'Tutorials',
            children: [
              {
                title: 'index',
                href: '/docs/creators/javascript/tutorials',
              },
              {
                title: 'QuickStart Explained',
                href: '/docs/creators/javascript/tutorials/quickstart-explained',
              },
              {
                title: 'Running parallel tasks',
                href: '/docs/creators/javascript/tutorials/running-parallel-tasks',
              },
              {
                title: 'Running Golem from browser',
                href: '/docs/creators/javascript/tutorials/running-in-browser',
              },
              {
                title: 'Building custom image',
                href: '/docs/creators/javascript/tutorials/building-custom-image',
              },
              {
                title: 'Testing Golem Images',
                href: '/docs/creators/javascript/tutorials/testing-golem-image',
              },
            ],
          },
          {
            title: 'JS Task API Examples',
            href: '',
            children: [
              {
                title: 'index',
                href: '/docs/creators/javascript/examples',
              },
              {
                title: 'Executing tasks',
                href: '/docs/creators/javascript/examples/executing-tasks',
              },
              {
                title: 'Composing tasks',
                href: '/docs/creators/javascript/examples/composing-tasks',
              },
              {
                title: 'Transferring data',
                href: '/docs/creators/javascript/examples/transferring-data',
              },
              {
                title: 'Working with results',
                href: '/docs/creators/javascript/examples/working-with-results',
              },
              {
                title: 'Selecting providers',
                href: '/docs/creators/javascript/examples/selecting-providers',
              },
              {
                title: 'Working with images',
                href: '/docs/creators/javascript/examples/working-with-images',
              },
              {
                title: 'Switching to mainnet',
                href: '/docs/creators/javascript/examples/switching-to-mainnet',
              },
            ],
          },
          {
            title: 'Guides',
            href: '',
            children: [
              {
                title: 'index',
                href: '/docs/creators/javascript/guides',
              },
              {
                title: 'Task Model',
                href: '/docs/creators/javascript/guides/task-model',
              },
              {
                title: 'Golem images',
                href: '/docs/creators/javascript/guides/golem-images',
              },
              {
                title: 'Golem images FAQ',
                href: '/docs/creators/javascript/guides/golem-images-faq',
              },
              {
                title: 'Switching to mainnet',
                href: '/docs/creators/javascript/guides/switching-to-mainnet',
              },
              {
                title: 'Troubleshooting',
                href: '/docs/creators/javascript/guides/troubleshooting',
              },
            ],
          },
          {
            title: 'Golem tools examples',
            href: '',
            children: [
              {
                title: 'index',
                href: '/docs/creators/javascript/examples/tools',
              },
              {
                title: 'Yagna installation for requestors',
                href: '/docs/creators/javascript/examples/tools/yagna-installation-for-requestors',
              },
              {
                title: 'Converting Docker image to Golem format',
                href: '/docs/creators/javascript/examples/tools/converting-docker-image-to-golem-format',
              },
              {
                title: 'Gvmkit_build installation (image conversion tool)',
                href: '/docs/creators/javascript/examples/tools/gvmkit-build-installation',
              },
              {
                title: 'Publishing custom images',
                href: '/docs/creators/javascript/examples/tools/publishing-custom-images',
              },
              {
                title: 'Golem wallet backup',
                href: '/docs/creators/javascript/examples/tools/golem-wallet-backup',
              },
              {
                title: 'Restoring Golem wallet',
                href: '/docs/creators/javascript/examples/tools/restoring-golem-wallet',
              },
              {
                title: 'Managing Golem wallet',
                href: '/docs/creators/javascript/examples/tools/managing-golem-wallet',
              },
            ],
          },
         
        ],
      },
      {
        title: 'Deploying apps on Golem',
        children: [
          { title: 'index', href: '/docs/creators/dapps' },
          { title: 'Quickstart', href: '/docs/creators/dapps/run-a-dapp' },
          {
            title: 'Hello World Dapp',
            href: '/docs/creators/dapps/hello-world-dapp',
          },
          {
            title: 'Managing multiple dapps',
            href: '/docs/creators/dapps/managing-multiple-dapps',
          },
          {
            title: 'Creating Golem Dapps',
            href: '/docs/creators/dapps/creating-golem-dapps',
          },
          {
            title: 'Differences between Docker containers and Golem VM runtime',
            href: '/docs/creators/dapps/docker-containers-vs-golem-vms',
          },
          {
            title: 'Troubleshooting',
            href: '/docs/creators/dapps/troubleshooting',
          },
        ],
      },
    ],
  },
  {
    title: 'Share and Earn',
    links: [
      { title: 'index', href: '/docs/providers' },
      { title: 'Installation', href: '/docs/providers/provider-installation' },
      {
        title: 'Basic Configuration',
        href: '/docs/providers/provider-basic-configuration',
      },
      { title: 'Provider FAQ', href: '/docs/providers/provider-faq' },
      {
        title: 'Troubleshooting',
        href: '/docs/providers/provider-troubleshooting',
      },
      {
        title: 'Yagna CLI reference',
        href: '/docs/providers/yagna-cli-reference',
      },
      {
        title: 'Maintenance',
        children: [
          { title: 'index', href: '/docs/providers/maintenance' },
          {
            title: 'Maintenance',
            href: '/docs/providers/maintenance/provider-maintenance',
          },
          {
            title: 'Wallet Backup',
            href: '/docs/providers/maintenance/wallet-backup',
          },
          {
            title: 'Wallet Restore',
            href: '/docs/providers/maintenance/wallet-restoration',
          },
        ],
      },
    ],
  },
  {
    title: 'General Info',
    links: [
      { title: 'index', href: '/docs/golem' },
      { title: 'Terms', href: '/docs/golem/terms' },
      {
        title: 'Golem Overview',
        children: [
          { title: 'index', href: '/docs/golem/overview' },
          { title: 'Provider', href: '/docs/golem/overview/provider' },
          { title: 'Requestor', href: '/docs/golem/overview/requestor' },
          {
            title: 'Requestor FAQ',
            href: '/docs/golem/overview/requestor-faq',
          },
        ],
      },
      {
        title: 'Payments',
        children: [
          { title: 'index', href: '/docs/golem/payments' },
          {
            title: 'Layer 2 Payments',
            href: '/docs/golem/payments/layer-2-payments',
          },
          {
            title: 'Golem token conversion',
            href: '/docs/golem/payments/golem-token-conversion',
          },
        ],
      },
      {
        title: 'Payload Manifest',
        children: [
          { title: 'index', href: '/docs/golem/payload-manifest' },
          {
            title: 'Schema docs',
            href: '/docs/golem/payload-manifest/computation-payload-manifest.schema',
          },
        ],
      },
    ],
  },
]
