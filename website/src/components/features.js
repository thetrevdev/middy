import React from 'react'
import CommunityDrivenIcon from '../images/CommunityDrivenIcon'
import ConfigurableIcon from '../images/ConfigurableIcon'
import EasyToUseIcon from '../images/EasyToUseIcon'
import ExtensibleIcon from '../images/ExtensibleIcon'
import FreeAsInFreedomIcon from '../images/FreeAsInFreedomIcon'
import LightweightIcon from '../images/LightweightIcon'
import ModularIcon from '../images/ModularIcon'

const Features = () => (
  <div className="flex flex-wrap items-start justify-center">

    <div className="w-100 w-25-l pa3 mr5 mt5">
      <LightweightIcon width="64" height="64"/>
      <h3 className="f3 lh-copy">Lightweight</h3>
      <p className="f4 lh-copy mt0">Install only a core module with very few dependencies.</p>
    </div>

    <div className="w-100 w-25-l pa3 mr5 mt5">
      <EasyToUseIcon width="64" height="64"/>
      <h3 className="f3 lh-copy">Easy to use</h3>
      <p className="f4 lh-copy mt0">Middy doesn't force to change your business logic, but provides additional behaviors around it</p>
    </div>

    <div className="w-100 w-25-l pa3 mr5 mt5">
      <ModularIcon width="64" height="64"/>
      <h3 className="f3 lh-copy">Modular</h3>
      <p className="f4 lh-copy mt0">Distributed as a collection of decoupled packages. Add only what you need.</p>
    </div>

    <div className="w-100 w-25-l pa3 mr5 mt5">
      <ConfigurableIcon width="64" height="64"/>
      <h3 className="f3 lh-copy">Configurable</h3>
      <p className="f4 lh-copy mt0">Every official middleware is highly configurable to be easily adapted to your specific needs.</p>
    </div>

    <div className="w-100 w-25-l pa3 mr5 mt5">
      <ExtensibleIcon width="64" height="64"/>
      <h3 className="f3 lh-copy">Extensible</h3>
      <p className="f4 lh-copy mt0">It's very easy to create your own middlewares or adopt third party ones.</p>
    </div>

    <div className="w-100 w-25-l pa3 mr5 mt5">
      <CommunityDrivenIcon width="64" height="64"/>
      <h3 className="f3 lh-copy">Community driven</h3>
      <p className="f4 lh-copy mt0">Maintained by the community</p>
    </div>

    <div className="w-100 w-25-l pa3 mr5 mt5">
      <FreeAsInFreedomIcon width="64" height="64"/>
      <h3 className="f3 lh-copy">Free as in freedom</h3>
      <p className="f4 lh-copy mt0">Distributed under MIT license, you are free to use and re-distribute Middy as you please.</p>
    </div>
  </div>
)

export default Features
