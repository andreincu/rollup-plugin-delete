/* eslint-disable no-console */
import del from 'del'

export default function ({ targets = [], verbose = false, ...rest }) {
  return {
    name: 'delete',
    buildStart: () => del(targets, rest).then((paths) => {
      if (verbose) {
        const message = rest.dryRun
          ? `Expected files and folders to be deleted: ${paths.length}`
          : `Deleted files and folders: ${paths.length}`

        console.log(message)

        if (paths.length > 0) {
          paths.forEach((path) => {
            console.log(path)
          })
        }
      }
    })
  }
}
