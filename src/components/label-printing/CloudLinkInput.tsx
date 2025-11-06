'use client'

export function CloudLinkInput() {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Paste your cloud storage link below
      </label>
      <input
        type="url"
        name="cloudLink"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wine-500 focus:border-transparent"
        placeholder="https://drive.google.com/... or https://dropbox.com/..."
      />
      <p className="text-xs text-gray-500 mt-2">
        Supported: Google Drive, Dropbox, WeTransfer, OneDrive<br/>
        Please ensure sharing permissions are set to &quot;Anyone with the link can view&quot;
      </p>

      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
        <p className="text-sm text-blue-800 font-medium mb-2">How to share from Google Drive:</p>
        <ol className="text-xs text-blue-700 space-y-1 ml-4 list-decimal">
          <li>Upload your files to Google Drive</li>
          <li>Right-click the file/folder → &quot;Share&quot;</li>
          <li>Click &quot;Change to anyone with the link&quot;</li>
          <li>Copy the link and paste it above</li>
        </ol>
      </div>
    </div>
  )
}
